'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { useLightbox } from '@/lib/LightboxContext'

export default function People() {
  const { t } = useLanguage()
  const { open } = useLightbox()

  const communityImages = [
    { src: 'team-on-scaffolding.png', alt: 'Team auf dem Gerüst' },
    { src: 'levi-rubble-pile.png', alt: 'Levi auf dem Schuttberg' },
    { src: 'levi-sculpting-tree.png', alt: 'Levi als Bildhauer' },
    { src: 'die-kleine-kneipe.png', alt: 'Die kleine Kneipe' },
    { src: 'orchard-gathering-spring.png', alt: 'Gemeinschaftstreffen im Obstgarten' },
    { src: 'orchard-meeting.png', alt: 'Planung im Obstgarten' },
  ]

  return (
    <section id="menschen" className="bg-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            {t.people.heading}
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">{t.people.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="relative">
            <button
              onClick={() => open('/images/levi-portrait.png', 'Levi Lewandowski')}
              className="relative h-80 sm:h-96 w-full block rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
              aria-label="Bild vergrößern"
            >
              <Image src="/images/levi-portrait.png" alt="Levi Lewandowski" fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </button>
            <button
              onClick={() => open('/images/climbing-wall-repair.png', 'Handwerk an der Mauer')}
              className="absolute -bottom-6 -right-6 w-40 h-32 sm:w-52 sm:h-40 hidden sm:block cursor-zoom-in group rounded-xl overflow-hidden shadow-xl border-4 border-amber-50"
              aria-label="Bild vergrößern"
            >
              <Image src="/images/climbing-wall-repair.png" alt="Handwerk an der Mauer" fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          </div>

          <div>
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">{t.people.leviRole}</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-6 mt-2">{t.people.leviTitle}</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">{t.people.leviText}</p>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2">
              <p className="text-stone-700 italic text-lg leading-relaxed">{t.people.leviQuote}</p>
            </blockquote>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mb-4">{t.people.communityHeading}</h3>
          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-3xl">{t.people.communityText}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {communityImages.map((img) => (
              <button key={img.src} onClick={() => open(`/images/${img.src}`, img.alt)}
                className="relative h-40 sm:h-56 rounded-xl overflow-hidden cursor-zoom-in group"
                aria-label={`Bild vergrößern: ${img.alt}`}
              >
                <Image src={`/images/${img.src}`} alt={img.alt} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition-opacity drop-shadow">⊕</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
