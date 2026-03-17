'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const allImages = [
  { src: 'main-hall-good-morning.png', alt: 'Haupthalle' },
  { src: 'rainbow-tower.png', alt: 'Regenbogen über dem Turm' },
  { src: 'silo-golden-hour.png', alt: 'Silo in der Abendsonne' },
  { src: 'kalkturm-sunset.png', alt: 'Kalkturm bei Sonnenuntergang' },
  { src: 'sunset-conveyor-bridge.png', alt: 'Förderbrücke bei Sonnenuntergang' },
  { src: 'sunrise-reflection.png', alt: 'Sonnenaufgang Spiegelung' },
  { src: 'aerial-yeah.png', alt: 'Drohne "Yeah!"' },
  { src: 'aerial-overview.png', alt: 'Drohnenübersicht' },
  { src: 'road-view-golden.png', alt: 'Blick auf die Straße' },
  { src: 'main-hall-wheatfield.png', alt: 'Haupthalle aus dem Weizenfeld' },
  { src: 'ruins-from-marsh.png', alt: 'Ruinen aus dem Schilf' },
  { src: 'farmhouse-aerial-decay.png', alt: 'Hufeisengehöft im Verfall' },
  { src: 'farmhouse-exterior.png', alt: 'Hufeisengehöft Außenansicht' },
  { src: 'projekt-banner-tower.png', alt: 'Banner am Turm' },
  { src: 'old-chimney-sunlight.png', alt: 'Alter Kamin mit Sonne' },
  { src: 'factory-interior-beams.png', alt: 'Fabrikhalle innen' },
  { src: 'cyclone-separator.png', alt: 'Zyklonabscheider' },
  { src: 'basement-interior.png', alt: 'Keller innen' },
  { src: 'anfang-door.png', alt: '"Anfang" Tür' },
  { src: 'levi-portrait.png', alt: 'Levi Lewandowski' },
  { src: 'levi-rubble-pile.png', alt: 'Levi auf dem Schuttberg' },
  { src: 'levi-sculpting-tree.png', alt: 'Levi als Bildhauer' },
  { src: 'levi-shoveling.png', alt: 'Körperliche Arbeit' },
  { src: 'climbing-wall-repair.png', alt: 'Reparatur an der Mauer' },
  { src: 'team-on-scaffolding.png', alt: 'Team auf dem Gerüst' },
  { src: 'volunteers-clearing.png', alt: 'Freiwillige beim Aufräumen' },
  { src: 'early-cleanup-crane.png', alt: 'Frühe Aufräumarbeiten' },
  { src: 'trench-digging.png', alt: 'Grabungsarbeiten' },
  { src: 'excavator-groundwork.png', alt: 'Bagger bei Erdarbeiten' },
  { src: 'die-kleine-kneipe.png', alt: 'Die kleine Kneipe' },
  { src: 'orchard-gathering-spring.png', alt: 'Frühjahrstreffen im Obstgarten' },
  { src: 'orchard-meeting.png', alt: 'Planung im Obstgarten' },
  { src: 'beer-toast-orchard.png', alt: 'Prost!' },
  { src: 'established-garden.png', alt: 'Garten im Sommer' },
  { src: 'garden-plants.png', alt: 'Gartenpflanzen' },
  { src: 'sunset-garden-view.png', alt: 'Sonnenuntergang vom Garten' },
  { src: 'baby-ducks.png', alt: 'Junge Enten' },
  { src: 'forest-sunlight.png', alt: 'Wald mit Sonnenlicht' },
  { src: 'quarry-reeds.png', alt: 'Schilfgebiet am Steinbruch' },
  { src: 'grass-growing.png', alt: 'Gras wächst durch Kies' },
  { src: 'pirate-ship-build.png', alt: 'Piratenboot-Bau' },
  { src: 'snail-artwork.png', alt: 'Schnecken-Kunstwerk' },
  { src: 'logo-banner.png', alt: 'Projekt-Banner' },
  { src: 'winter-bus.png', alt: 'Winterlandschaft' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + allImages.length) % allImages.length : null))
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % allImages.length : null))

  return (
    <section id="galerie" className="bg-stone-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            {t.gallery.heading}
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">{t.gallery.sub}</p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {allImages.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh]">
              <Image
                src={`/images/${allImages[lightbox].src}`}
                alt={allImages[lightbox].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-stone-400 text-sm mt-3">{allImages[lightbox].alt}</p>
            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-stone-800/80 hover:bg-amber-500 text-white rounded-full p-3 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-stone-800/80 hover:bg-amber-500 text-white rounded-full p-3 transition-colors"
            >
              ›
            </button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 bg-stone-800/80 hover:bg-red-600 text-white rounded-full px-4 py-2 text-sm transition-colors"
            >
              {t.gallery.close} ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
