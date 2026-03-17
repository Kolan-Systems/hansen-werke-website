'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/main-hall-good-morning.png"
        alt="Hansen-Werke Haupthalle"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          {t.hero.sub}
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Hansen-Werke
        </h1>
        <p className="text-stone-200 text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          {t.hero.tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors group"
        aria-label={t.hero.scroll}
      >
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-stone-500 group-hover:bg-amber-400 transition-colors animate-bounce" />
      </a>
    </section>
  )
}
