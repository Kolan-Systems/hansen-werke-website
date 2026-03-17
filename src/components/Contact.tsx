'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="kontakt" className="bg-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-stone-500 text-lg mb-10">{t.contact.sub}</p>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-amber-600">
                  {t.contact.emailLabel}
                </span>
                <a
                  href="mailto:info@hansenwerke.net"
                  className="block text-stone-800 text-lg hover:text-amber-600 transition-colors mt-1"
                >
                  info@hansenwerke.net
                </a>
              </div>
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-amber-600">
                  {t.contact.phoneLabel}
                </span>
                <a
                  href="tel:+4915253877652"
                  className="block text-stone-800 text-lg hover:text-amber-600 transition-colors mt-1"
                >
                  +49 1525 3877652
                </a>
              </div>
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-amber-600">
                  {t.contact.addressLabel}
                </span>
                <p className="text-stone-800 mt-1">
                  Am Kalkbruch 1a<br />
                  38268 Lengede OT Woltwiesche<br />
                  Niedersachsen
                </p>
                <a
                  href="https://maps.google.com/?q=52.1973,10.2777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm mt-2 transition-colors"
                >
                  {t.contact.mapLink} →
                </a>
              </div>
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-amber-600">
                  {t.contact.social}
                </span>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.facebook.com/hansenwerke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/hansenwerke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-auto min-h-64 bg-stone-200">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.2677%2C52.1923%2C10.2877%2C52.2023&layer=mapnik&marker=52.1973%2C10.2777"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              title="Hansen-Werke Standort"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
