'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function GetInvolved() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: '🤝',
      title: t.join.volunteerTitle,
      text: t.join.volunteerText,
      cta: t.join.ctaVolunteer,
      href: 'mailto:info@hansenwerke.net?subject=Ehrenamt',
      accent: 'border-amber-500',
    },
    {
      icon: '💛',
      title: t.join.donateTitle,
      text: t.join.donateText,
      cta: t.join.ctaDonate,
      href: '#kontakt',
      accent: 'border-green-500',
      extra: (
        <div className="mt-4 bg-stone-800 rounded-lg p-4 text-sm font-mono">
          <div className="text-stone-400 text-xs mb-1">{t.join.ibanLabel}</div>
          <div className="text-white select-all">DE35 4306 0967 4111 0732 00</div>
          <div className="text-stone-400 text-xs mt-2 mb-1">{t.join.bankLabel}</div>
          <div className="text-white">GLS Bank</div>
        </div>
      ),
    },
    {
      icon: '📍',
      title: t.join.visitTitle,
      text: t.join.visitText,
      cta: t.join.ctaVisit,
      href: 'mailto:info@hansenwerke.net?subject=Besuch',
      accent: 'border-sky-500',
    },
  ]

  return (
    <section id="mitmachen" className="bg-stone-800 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.join.heading}
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{t.join.sub}</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-stone-900 rounded-2xl p-8 border-t-4 ${card.accent} flex flex-col`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed flex-1">{card.text}</p>
              {card.extra}
              <a
                href={card.href}
                className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm px-6 py-3 rounded-lg text-center transition-colors"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
