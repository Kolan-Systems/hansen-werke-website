import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community – Hansen-Werke',
  description: 'Tritt der Hansen-Werke Community bei — Austausch über Element/Matrix. Join the Hansen-Werke community on Element/Matrix.',
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
