'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function People() {
  const { t } = useLanguage()

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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            {t.people.heading}
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">{t.people.sub}</p>
        </div>

        {/* Levi section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Portrait */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/levi-portrait.png"
                alt="Levi Lewandowski"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Floating image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-32 sm:w-52 sm:h-40 hidden sm:block">
              <Image
                src="/images/climbing-wall-repair.png"
                alt="Handwerk an der Mauer"
                fill
                className="object-cover rounded-xl shadow-xl border-4 border-amber-50"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="mb-2">
              <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
                {t.people.leviRole}
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
              {t.people.leviTitle}
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">{t.people.leviText}</p>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2">
              <p className="text-stone-700 italic text-lg leading-relaxed">{t.people.leviQuote}</p>
            </blockquote>
          </div>
        </div>

        {/* Community section */}
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
            {t.people.communityHeading}
          </h3>
          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-3xl">
            {t.people.communityText}
          </p>
          {/* Community photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {communityImages.map((img) => (
              <div key={img.src} className="relative h-40 sm:h-56 rounded-xl overflow-hidden group">
                <Image
                  src={`/images/${img.src}`}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
