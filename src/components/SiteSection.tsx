'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { useLightbox } from '@/lib/LightboxContext'

export default function SiteSection() {
  const { t } = useLanguage()
  const { open } = useLightbox()

  const atmosphereImages = [
    { src: 'sunset-conveyor-bridge.png', alt: 'Förderbrücke bei Sonnenuntergang' },
    { src: 'road-view-golden.png', alt: 'Blick auf die Landstraße' },
    { src: 'projekt-banner-tower.png', alt: 'Projekt-Banner am Turm' },
  ]

  return (
    <section id="gelaende" className="bg-stone-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.site.heading}</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{t.site.sub}</p>
        </div>

        {/* Aerial overview */}
        <button
          onClick={() => open('/images/aerial-overview.png', 'Drohnenaufnahme Hansen-Werke')}
          className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-12 shadow-2xl block cursor-zoom-in group"
          aria-label="Bild vergrößern"
        >
          <Image src="/images/aerial-overview.png" alt="Drohnenaufnahme Hansen-Werke" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent group-hover:from-stone-900/40 transition-colors" />
          <div className="absolute bottom-6 left-6">
            <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Lengede · Niedersachsen</span>
          </div>
        </button>

        {/* 4 areas grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.site.areas.map((area) => (
            <div key={area.name} className="group relative overflow-hidden rounded-xl bg-stone-800">
              <button
                onClick={() => open(`/images/${area.img}`, area.name)}
                className="relative h-56 sm:h-64 w-full block cursor-zoom-in"
                aria-label={`Bild vergrößern: ${area.name}`}
              >
                <Image src={`/images/${area.img}`} alt={area.name} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl drop-shadow">⊕</div>
              </button>
              <div className="p-6 -mt-12 relative z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{area.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra atmosphere images */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {atmosphereImages.map((img) => (
            <button
              key={img.src}
              onClick={() => open(`/images/${img.src}`, img.alt)}
              className="relative h-32 sm:h-48 rounded-xl overflow-hidden block cursor-zoom-in group"
              aria-label={`Bild vergrößern: ${img.alt}`}
            >
              <Image src={`/images/${img.src}`} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity drop-shadow">⊕</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
