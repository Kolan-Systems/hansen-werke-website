'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function Timeline() {
  const { t } = useLanguage()

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

          <div className="space-y-12 sm:space-y-16">
            {t.timeline.events.map((event, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative flex flex-col sm:flex-row ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start sm:items-center gap-6 sm:gap-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-3 sm:top-1/2 w-3 h-3 rounded-full bg-amber-500 -translate-x-1.5 sm:-translate-x-1.5 sm:-translate-y-1.5 z-10 ring-4 ring-stone-900" />

                  {/* Content card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-5/12 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                    }`}
                  >
                    <div className="bg-stone-800 rounded-xl p-6 hover:bg-stone-750 transition-colors">
                      <span className="text-amber-500 font-mono text-sm font-bold">{event.year}</span>
                      <h3 className="font-serif text-xl font-bold text-white mt-1 mb-2">{event.title}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed">{event.text}</p>
                    </div>
                  </div>

                  {/* Image */}
                  {event.img && (
                    <div
                      className={`ml-12 sm:ml-0 sm:w-5/12 ${
                        isEven ? 'sm:pl-12 sm:ml-auto' : 'sm:pr-12'
                      }`}
                    >
                      <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden">
                        <Image
                          src={`/images/${event.img}`}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
