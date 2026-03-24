import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ – Hansen-Werke',
  description: 'Häufige Fragen zum Hansen-Werke Kulturdorf in Lengede. Frequently asked questions about the Hansen-Werke cultural village.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
