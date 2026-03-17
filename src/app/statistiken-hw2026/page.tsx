import { kv } from '@vercel/kv'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Statistiken – Hansen-Werke',
  robots: 'noindex, nofollow',
}

// Revalidate every 5 minutes
export const revalidate = 300

interface Visit {
  t: string
  p: string
  c: string
  d: string
  r: string
}

async function getStats() {
  try {
    // Last 30 days
    const days: { date: string; count: number }[] = []
    const today = new Date()
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const key = d.toISOString().slice(0, 10)
      const count = (await kv.get<number>(`visits:daily:${key}`)) || 0
      days.push({ date: key, count })
    }

    const totalAll = days.reduce((s, d) => s + d.count, 0)
    const today7 = days.slice(-7).reduce((s, d) => s + d.count, 0)
    const todayCount = days[days.length - 1].count

    // Countries
    const countryKeys = await kv.keys('visits:country:*')
    const countries: { name: string; count: number }[] = []
    for (const k of countryKeys) {
      const c = (await kv.get<number>(k)) || 0
      countries.push({ name: k.replace('visits:country:', ''), count: c })
    }
    countries.sort((a, b) => b.count - a.count)

    // Devices
    const deviceKeys = await kv.keys('visits:device:*')
    const devices: { name: string; count: number }[] = []
    for (const k of deviceKeys) {
      const c = (await kv.get<number>(k)) || 0
      devices.push({ name: k.replace('visits:device:', ''), count: c })
    }
    devices.sort((a, b) => b.count - a.count)

    // Pages
    const pageKeys = await kv.keys('visits:page:*')
    const pages: { name: string; count: number }[] = []
    for (const k of pageKeys) {
      const c = (await kv.get<number>(k)) || 0
      pages.push({ name: k.replace('visits:page:', ''), count: c })
    }
    pages.sort((a, b) => b.count - a.count)

    // Referrers
    const refKeys = await kv.keys('visits:referrer:*')
    const referrers: { name: string; count: number }[] = []
    for (const k of refKeys) {
      const c = (await kv.get<number>(k)) || 0
      referrers.push({ name: k.replace('visits:referrer:', ''), count: c })
    }
    referrers.sort((a, b) => b.count - a.count)

    // Recent visits
    const recentRaw = await kv.lrange<string>('visits:recent', 0, 19)
    const recent: Visit[] = recentRaw.map((r) => {
      try {
        return typeof r === 'string' ? JSON.parse(r) : r
      } catch {
        return { t: '', p: '', c: '', d: '', r: '' }
      }
    })

    return { days, totalAll, today7, todayCount, countries, devices, pages, referrers, recent }
  } catch {
    return null
  }
}

const COUNTRY_NAMES: Record<string, string> = {
  DE: '🇩🇪 Deutschland',
  AT: '🇦🇹 Österreich',
  CH: '🇨🇭 Schweiz',
  US: '🇺🇸 USA',
  GB: '🇬🇧 Großbritannien',
  FR: '🇫🇷 Frankreich',
  NL: '🇳🇱 Niederlande',
  PL: '🇵🇱 Polen',
  unknown: '🌍 Unbekannt',
}

function countryLabel(code: string): string {
  return COUNTRY_NAMES[code.toUpperCase()] || `🌐 ${code}`
}

export default async function StatisticsPage() {
  const stats = await getStats()

  if (!stats) {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-amber-400 mb-4">Statistiken</h1>
          <p className="text-stone-400 mb-4">Vercel KV ist noch nicht eingerichtet.</p>
          <p className="text-stone-500 text-sm max-w-md">
            Gehe zu <strong className="text-amber-400">Vercel Dashboard → Storage → KV</strong>,
            erstelle eine KV-Datenbank und verknüpfe sie mit diesem Projekt.
            Dann werden hier automatisch Besuche erfasst.
          </p>
        </div>
      </div>
    )
  }

  const maxDay = Math.max(...stats.days.map((d) => d.count), 1)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <a href="/" className="text-amber-500 text-sm hover:text-amber-400 transition-colors">
            ← Hansen-Werke
          </a>
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-1">Statistiken</h1>
          <p className="text-stone-500 text-sm">
            Cookie-frei · Kein Tracking · Datenschutzkonform · Aktualisierung alle 5 Minuten
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Heute', value: stats.todayCount },
            { label: 'Letzte 7 Tage', value: stats.today7 },
            { label: 'Letzte 30 Tage', value: stats.totalAll },
            { label: 'Länder', value: stats.countries.length },
          ].map((s) => (
            <div key={s.label} className="bg-stone-900 rounded-xl p-5 text-center">
              <div className="font-serif text-3xl font-bold text-amber-400">{s.value}</div>
              <div className="text-stone-500 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Daily chart – last 30 days */}
        <div className="bg-stone-900 rounded-2xl p-6 mb-8">
          <h2 className="font-serif text-xl font-bold text-white mb-6">Seitenaufrufe – letzte 30 Tage</h2>
          <div className="flex items-end gap-1 h-32">
            {stats.days.map((d) => {
              const pct = Math.round((d.count / maxDay) * 100)
              const label = d.date.slice(5) // MM-DD
              return (
                <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div
                    className="w-full bg-amber-600 hover:bg-amber-400 rounded-sm transition-colors cursor-default"
                    style={{ height: `${Math.max(pct, 2)}%` }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {label}: {d.count}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between text-stone-600 text-xs mt-2">
            <span>{stats.days[0].date.slice(5)}</span>
            <span>Heute</span>
          </div>
        </div>

        {/* 3-column: Countries, Devices, Pages */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {/* Countries */}
          <div className="bg-stone-900 rounded-2xl p-6">
            <h2 className="font-serif text-lg font-bold text-white mb-4">Länder</h2>
            {stats.countries.length === 0 ? (
              <p className="text-stone-600 text-sm">Noch keine Daten</p>
            ) : (
              <div className="space-y-2">
                {stats.countries.slice(0, 8).map((c) => (
                  <div key={c.name} className="flex justify-between items-center">
                    <span className="text-stone-300 text-sm">{countryLabel(c.name)}</span>
                    <span className="text-amber-400 font-mono text-sm font-bold">{c.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Devices */}
          <div className="bg-stone-900 rounded-2xl p-6">
            <h2 className="font-serif text-lg font-bold text-white mb-4">Geräte</h2>
            {stats.devices.length === 0 ? (
              <p className="text-stone-600 text-sm">Noch keine Daten</p>
            ) : (
              <div className="space-y-3">
                {stats.devices.map((d) => {
                  const total = stats.devices.reduce((s, x) => s + x.count, 0)
                  const pct = total ? Math.round((d.count / total) * 100) : 0
                  const icon = d.name === 'mobile' ? '📱' : d.name === 'tablet' ? '📱' : '💻'
                  return (
                    <div key={d.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-300">{icon} {d.name}</span>
                        <span className="text-amber-400 font-mono font-bold">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-800 rounded-full">
                        <div
                          className="h-1.5 bg-amber-500 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Referrers */}
          <div className="bg-stone-900 rounded-2xl p-6">
            <h2 className="font-serif text-lg font-bold text-white mb-4">Quellen</h2>
            {stats.referrers.length === 0 ? (
              <p className="text-stone-600 text-sm">Noch keine Daten</p>
            ) : (
              <div className="space-y-2">
                {stats.referrers.slice(0, 8).map((r) => (
                  <div key={r.name} className="flex justify-between items-center">
                    <span className="text-stone-300 text-sm truncate max-w-32">{r.name}</span>
                    <span className="text-amber-400 font-mono text-sm font-bold">{r.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pages */}
        <div className="bg-stone-900 rounded-2xl p-6 mb-8">
          <h2 className="font-serif text-lg font-bold text-white mb-4">Seiten</h2>
          {stats.pages.length === 0 ? (
            <p className="text-stone-600 text-sm">Noch keine Daten</p>
          ) : (
            <div className="space-y-2">
              {stats.pages.slice(0, 10).map((p) => {
                const maxPage = stats.pages[0].count
                const pct = Math.round((p.count / maxPage) * 100)
                return (
                  <div key={p.name} className="flex items-center gap-4">
                    <span className="text-stone-400 text-sm font-mono w-32 truncate">{p.name}</span>
                    <div className="flex-1 h-2 bg-stone-800 rounded-full">
                      <div className="h-2 bg-amber-600 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-amber-400 font-mono text-sm font-bold w-10 text-right">{p.count}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Recent visits */}
        <div className="bg-stone-900 rounded-2xl p-6">
          <h2 className="font-serif text-lg font-bold text-white mb-4">Letzte 20 Besuche</h2>
          {stats.recent.length === 0 ? (
            <p className="text-stone-600 text-sm">Noch keine Daten</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-stone-500 text-xs uppercase tracking-wider border-b border-stone-800">
                    <th className="text-left py-2 pr-4">Zeit</th>
                    <th className="text-left py-2 pr-4">Seite</th>
                    <th className="text-left py-2 pr-4">Land</th>
                    <th className="text-left py-2 pr-4">Gerät</th>
                    <th className="text-left py-2">Quelle</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recent.map((v, i) => (
                    <tr key={i} className="border-b border-stone-800/50 hover:bg-stone-800/30">
                      <td className="py-2 pr-4 text-stone-400 font-mono whitespace-nowrap">
                        {v.t ? new Date(v.t).toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' }) : '–'}
                      </td>
                      <td className="py-2 pr-4 text-stone-300 font-mono">{v.p || '/'}</td>
                      <td className="py-2 pr-4 text-stone-300">{countryLabel(v.c || 'unknown')}</td>
                      <td className="py-2 pr-4 text-stone-400">{v.d || '–'}</td>
                      <td className="py-2 text-stone-400 truncate max-w-32">{v.r || 'direct'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-stone-700 text-xs mt-8">
          Alle Daten werden ohne Cookies und ohne personenbezogene Daten erfasst. IP-Adressen werden nicht gespeichert.
        </p>
      </div>
    </div>
  )
}
