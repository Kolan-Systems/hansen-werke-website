'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '/#geschichte', label: t.nav.history },
    { href: '/#menschen', label: t.nav.people },
    { href: '/#gelaende', label: t.nav.site },
    { href: '/#galerie', label: t.nav.gallery },
    { href: '/#mitmachen', label: t.nav.join },
    { href: '/community', label: t.nav.community },
    { href: '/faq', label: t.nav.faq },
    { href: '/#kontakt', label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-amber-400 font-serif text-lg font-bold tracking-wide">
            Hansen-Werke
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-300 hover:text-amber-400 text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            {/* Language toggle */}
            <div className="flex items-center gap-1 ml-4 border border-stone-600 rounded text-xs overflow-hidden">
              <button
                onClick={() => setLang('de')}
                className={`px-2 py-1 transition-colors ${lang === 'de' ? 'bg-amber-500 text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-200'}`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-amber-500 text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-200'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-stone-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-900/98 backdrop-blur-sm px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-stone-300 hover:text-amber-400 border-b border-stone-800 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setLang('de')}
              className={`px-3 py-1 text-sm rounded ${lang === 'de' ? 'bg-amber-500 text-stone-900 font-bold' : 'text-stone-400 border border-stone-600'}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-sm rounded ${lang === 'en' ? 'bg-amber-500 text-stone-900 font-bold' : 'text-stone-400 border border-stone-600'}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
