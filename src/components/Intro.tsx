'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function Intro() {
  const { t } = useLanguage()

  return (
    <section id="intro" className="bg-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-8 leading-tight">
              {t.intro.heading}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {t.intro.body}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: t.intro.stat1, label: t.intro.stat1label },
                { value: t.intro.stat2, label: t.intro.stat2label },
                { value: t.intro.stat3, label: t.intro.stat3label },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                    {s.value}
                  </div>
                  <div className="text-stone-500 text-xs uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              <Image
                src="/images/rainbow-tower.png"
                alt="Regenbogen über dem Kalkturm"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating second image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-36 sm:w-64 sm:h-48 hidden sm:block">
              <Image
                src="/images/sunrise-reflection.png"
                alt="Sonnenaufgang Hansen-Werke"
                fill
                className="object-cover rounded-xl shadow-xl border-4 border-amber-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
