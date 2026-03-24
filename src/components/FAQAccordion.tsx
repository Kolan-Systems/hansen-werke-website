'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  icon: string
  items: FAQItem[]
}

export default function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenKey(openKey === key ? null : key)
  }

  return (
    <div className="space-y-8">
      {categories.map((cat, ci) => (
        <div key={ci} className="bg-stone-900 rounded-2xl p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
            <span className="text-2xl">{cat.icon}</span>
            {cat.title}
          </h2>

          <div>
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`
              const isOpen = openKey === key
              const isLast = ii === cat.items.length - 1

              return (
                <div key={key} className={!isLast ? 'border-b border-stone-800' : ''}>
                  <button
                    onClick={() => toggle(key)}
                    className="flex items-center justify-between w-full py-5 text-left group cursor-pointer"
                  >
                    <span className="text-white font-medium text-base sm:text-lg pr-4 group-hover:text-amber-400 transition-colors">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-stone-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
