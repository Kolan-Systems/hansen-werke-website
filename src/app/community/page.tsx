'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

const MATRIX_INVITE = 'https://matrix.to/#/#hansenwerke:matrix.org'

const roomAccents = [
  'border-green-500',
  'border-amber-500',
  'border-sky-500',
  'border-purple-500',
  'border-pink-500',
  'border-teal-500',
]

export default function CommunityPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />
      <main className="bg-stone-950 min-h-screen">
        {/* Header */}
        <div className="pt-28 pb-16 bg-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/"
              className="text-amber-500 text-sm hover:text-amber-400 transition-colors"
            >
              {t.community.backLink}
            </a>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-6 mb-4">
              {t.community.heading}
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl">
              {t.community.sub}
            </p>
          </div>
        </div>

        {/* Element Invite Block */}
        <div className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-900 rounded-2xl p-8 sm:p-12 border-t-4 border-green-500 text-center">
              {/* Element Logo */}
              <div className="flex justify-center mb-6">
                <svg width="48" height="48" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2 7.2C21.2 5.88 22.28 4.8 23.6 4.8C33.82 4.8 42.2 13.18 42.2 23.4C42.2 24.72 41.12 25.8 39.8 25.8C38.48 25.8 37.4 24.72 37.4 23.4C37.4 15.82 31.18 9.6 23.6 9.6C22.28 9.6 21.2 8.52 21.2 7.2Z" fill="#22c55e"/>
                  <path d="M32.8 46.8C32.8 48.12 31.72 49.2 30.4 49.2C20.18 49.2 11.8 40.82 11.8 30.6C11.8 29.28 12.88 28.2 14.2 28.2C15.52 28.2 16.6 29.28 16.6 30.6C16.6 38.18 22.82 44.4 30.4 44.4C31.72 44.4 32.8 45.48 32.8 46.8Z" fill="#22c55e"/>
                  <path d="M7.2 32.8C5.88 32.8 4.8 31.72 4.8 30.4C4.8 20.18 13.18 11.8 23.4 11.8C24.72 11.8 25.8 12.88 25.8 14.2C25.8 15.52 24.72 16.6 23.4 16.6C15.82 16.6 9.6 22.82 9.6 30.4C9.6 31.72 8.52 32.8 7.2 32.8Z" fill="#22c55e"/>
                  <path d="M46.8 21.2C48.12 21.2 49.2 22.28 49.2 23.6C49.2 33.82 40.82 42.2 30.6 42.2C29.28 42.2 28.2 41.12 28.2 39.8C28.2 38.48 29.28 37.4 30.6 37.4C38.18 37.4 44.4 31.18 44.4 23.6C44.4 22.28 45.48 21.2 46.8 21.2Z" fill="#22c55e"/>
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.community.elementHeading}
              </h2>
              <p className="text-stone-400 leading-relaxed max-w-xl mx-auto mb-8">
                {t.community.elementText}
              </p>

              <a
                href={MATRIX_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                {t.community.elementButton}
              </a>

              <p className="text-stone-500 text-sm mt-4">
                {t.community.elementNote}
              </p>
            </div>
          </div>
        </div>

        {/* Rooms Overview */}
        <div className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.community.roomsHeading}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.community.rooms.map((room, i) => (
                <div
                  key={room.name}
                  className={`bg-stone-900 rounded-2xl p-6 border-t-4 ${roomAccents[i]}`}
                >
                  <h3 className="font-mono text-green-400 text-lg font-bold mb-3">
                    {room.name}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Element */}
        <div className="pb-16 lg:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-8 text-center">
              {t.community.whyHeading}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {t.community.whyItems.map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-stone-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.community.ctaHeading}
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              {t.community.ctaText}
            </p>
            <a
              href="mailto:info@hansenwerke.net?subject=Kontakt"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              {t.community.ctaButton}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
