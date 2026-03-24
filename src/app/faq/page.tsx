'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { useLanguage } from '@/lib/LanguageContext'

export default function FAQPage() {
  const { t } = useLanguage()

  const categories = t.faq.categories.map((cat) => ({
    title: cat.title,
    icon: cat.icon,
    items: cat.items.map((item) => ({
      question: item.q,
      answer: item.a,
    })),
  }))

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
              {t.faq.backLink}
            </a>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-6 mb-4">
              {t.faq.heading}
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl">
              {t.faq.sub}
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion categories={categories} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-stone-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.faq.ctaHeading}
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              {t.faq.ctaText}
            </p>
            <a
              href="mailto:info@hansenwerke.net?subject=Frage"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              {t.faq.ctaButton}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
