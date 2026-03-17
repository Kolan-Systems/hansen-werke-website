import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hansen-Werke – Von der Kreidefabrik zum Kulturdorf',
  description:
    'Ein ehemaliges Industriegelände in Lengede (Niedersachsen) wird zum autarken Kulturdorf. Kunst, Handwerk, Permakultur und Gemeinschaft auf 86.000 m².',
  keywords: ['Hansen-Werke', 'Kulturdorf', 'Lengede', 'Niedersachsen', 'Kreidewerk', 'Gemeinschaft'],
  openGraph: {
    title: 'Hansen-Werke – Von der Kreidefabrik zum Kulturdorf',
    description: 'Ein lebendiges Experiment im ländlichen Norddeutschland.',
    images: ['/images/main-hall-good-morning.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-stone-900 text-stone-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
