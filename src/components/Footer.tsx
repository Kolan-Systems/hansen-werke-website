'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-stone-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="font-serif text-xl font-bold text-amber-400 mb-1">Hansen-Werke</div>
            <div className="text-stone-500 text-sm">{t.footer.tagline}</div>
            <div className="text-stone-600 text-xs mt-2">{t.footer.registry}</div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="/community" className="text-stone-500 hover:text-amber-400 transition-colors">
              Community
            </a>
            <a href="/faq" className="text-stone-500 hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#imprint" className="text-stone-500 hover:text-amber-400 transition-colors">
              {t.footer.imprint}
            </a>
            <a href="#privacy" className="text-stone-500 hover:text-amber-400 transition-colors">
              {t.footer.privacy}
            </a>
            <a
              href="https://www.facebook.com/hansenwerke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-amber-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hansenwerke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 text-center text-stone-600 text-xs">
          © {new Date().getFullYear()} Hansen-Werke e.V. · Amtsgericht Hildesheim, VerR 201082
        </div>
      </div>
    </footer>
  )
}
