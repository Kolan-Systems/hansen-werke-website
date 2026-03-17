import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export const runtime = 'edge'

function getDeviceType(ua: string): string {
  if (/mobile/i.test(ua)) return 'mobile'
  if (/tablet|ipad/i.test(ua)) return 'tablet'
  return 'desktop'
}

function getReferrerDomain(referrer: string): string {
  if (!referrer) return 'direct'
  try {
    const url = new URL(referrer)
    return url.hostname.replace(/^www\./, '')
  } catch {
    return 'direct'
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const page = (body.page as string) || '/'
    const referrer = (body.referrer as string) || ''

    // Data from Vercel headers (no IP stored)
    const country = req.headers.get('x-vercel-ip-country') || 'unknown'
    const ua = req.headers.get('user-agent') || ''
    const device = getDeviceType(ua)
    const ref = getReferrerDomain(referrer)

    const now = new Date()
    const dateKey = now.toISOString().slice(0, 10) // YYYY-MM-DD
    const hourKey = now.toISOString().slice(0, 13) // YYYY-MM-DDTHH

    // Increment daily total
    await kv.incr(`visits:daily:${dateKey}`)

    // Increment hourly for chart
    await kv.incr(`visits:hourly:${hourKey}`)
    await kv.expire(`visits:hourly:${hourKey}`, 60 * 60 * 24 * 90) // 90 days

    // Increment page counter
    const safePage = page.replace(/[^a-z0-9/_-]/gi, '').slice(0, 100) || '/'
    await kv.incr(`visits:page:${safePage}`)

    // Increment country counter
    await kv.incr(`visits:country:${country}`)

    // Increment device counter
    await kv.incr(`visits:device:${device}`)

    // Increment referrer counter
    await kv.incr(`visits:referrer:${ref}`)

    // Store recent visits (last 200)
    const visit = JSON.stringify({
      t: now.toISOString(),
      p: page,
      c: country,
      d: device,
      r: ref,
    })
    await kv.lpush('visits:recent', visit)
    await kv.ltrim('visits:recent', 0, 199)

    return NextResponse.json({ ok: true })
  } catch (e) {
    // Fail silently — never break the user-facing site
    console.error('Track error:', e)
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
