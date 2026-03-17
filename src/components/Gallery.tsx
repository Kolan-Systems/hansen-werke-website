'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { useLightbox } from '@/lib/LightboxContext'

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
  const { open } = useLightbox()

  return (
    <section id="galerie" className="bg-stone-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            {t.gallery.heading}
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">{t.gallery.sub}</p>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {allImages.map((img) => (
            <button
              key={img.src}
              className="break-inside-avoid relative overflow-hidden rounded-xl cursor-zoom-in group w-full block"
              onClick={() => open(`/images/${img.src}`, img.alt)}
              aria-label={`Bild vergrößern: ${img.alt}`}
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition-opacity drop-shadow">⊕</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
