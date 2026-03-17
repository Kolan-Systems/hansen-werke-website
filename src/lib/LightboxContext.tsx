'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LightboxState {
  src: string | null
  alt: string
  open: (src: string, alt: string) => void
  close: () => void
}

const LightboxContext = createContext<LightboxState | null>(null)

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null)
  const [alt, setAlt] = useState('')

  const open = (s: string, a: string) => {
    setSrc(s)
    setAlt(a)
  }
  const close = () => setSrc(null)

  // Escape key + body scroll lock
  useEffect(() => {
    if (!src) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [src])

  return (
    <LightboxContext.Provider value={{ src, alt, open, close }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}
