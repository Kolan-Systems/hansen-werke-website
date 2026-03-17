'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { useLightbox } from '@/lib/LightboxContext'

export default function Timeline() {
  const { t } = useLanguage()
  const { open } = useLightbox()

  return (
    <section id="geschichte" className="bg-stone-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.timeline.heading}
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{t.timeline.sub}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-amber-600/30 sm:-translate-x-px" />

          <div className="space-y-10 sm:space-y-16">
            {t.timeline.events.map((event, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-4 w-3 h-3 rounded-full bg-amber-500 -translate-x-1.5 sm:-translate-x-1.5 z-10 ring-4 ring-stone-900" />

                  {/* MOBILE: compact card with image on top */}
                  <div className="ml-12 sm:hidden">
                    <div className="bg-stone-800 rounded-xl overflow-hidden">
                      {event.img && (
                        <button
                          onClick={() => open(`/images/${event.img}`, event.title)}
                          className="relative w-full h-44 block cursor-zoom-in group"
                          aria-label={`Bild vergrößern: ${event.title}`}
                        >
                          <Image
                            src={`/images/${event.img}`}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition-opacity drop-shadow">⊕</span>
                          </div>
                        </button>
                      )}
                      <div className="p-5">
                        <span className="text-amber-500 font-mono text-sm font-bold">{event.year}</span>
                        <h3 className="font-serif text-lg font-bold text-white mt-1 mb-2">{event.title}</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">{event.text}</p>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP: alternating two-column layout */}
                  <div className={`hidden sm:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Text card: 5/12 */}
                    <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                      <div className="bg-stone-800 rounded-xl p-6">
                        <span className="text-amber-500 font-mono text-sm font-bold">{event.year}</span>
                        <h3 className="font-serif text-xl font-bold text-white mt-1 mb-2">{event.title}</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">{event.text}</p>
                      </div>
                    </div>

                    {/* Center spacer (dot area) */}
                    <div className="w-2/12 flex-shrink-0" />

                    {/* Image: 5/12 */}
                    {event.img ? (
                      <div className="w-5/12">
                        <button
                          onClick={() => open(`/images/${event.img}`, event.title)}
                          className="relative w-full h-56 rounded-xl overflow-hidden block cursor-zoom-in group"
                          aria-label={`Bild vergrößern: ${event.title}`}
                        >
                          <Image
                            src={`/images/${event.img}`}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition-opacity drop-shadow">⊕</span>
                          </div>
                        </button>
                      </div>
                    ) : (
                      <div className="w-5/12" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
