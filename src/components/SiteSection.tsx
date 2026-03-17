'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function SiteSection() {
  const { t } = useLanguage()

  return (
    <section id="gelaende" className="bg-stone-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.site.heading}
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{t.site.sub}</p>
        </div>

        {/* Aerial overview */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/images/aerial-overview.png"
            alt="Drohnenaufnahme Hansen-Werke"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
              Lengede · Niedersachsen
            </span>
          </div>
        </div>

        {/* 4 areas grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.site.areas.map((area) => (
            <div
              key={area.name}
              className="group relative overflow-hidden rounded-xl bg-stone-800 hover:bg-stone-750 transition-colors"
            >
              <div className="relative h-56 sm:h-64">
                <Image
                  src={`/images/${area.img}`}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
              </div>
              <div className="p-6 -mt-12 relative z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{area.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra atmosphere images */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {['sunset-conveyor-bridge.png', 'road-view-golden.png', 'projekt-banner-tower.png'].map((img) => (
            <div key={img} className="relative h-32 sm:h-48 rounded-xl overflow-hidden">
              <Image
                src={`/images/${img}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
