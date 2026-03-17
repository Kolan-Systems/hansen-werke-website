import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Timeline from '@/components/Timeline'
import People from '@/components/People'
import SiteSection from '@/components/SiteSection'
import Gallery from '@/components/Gallery'
import GetInvolved from '@/components/GetInvolved'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <Timeline />
        <People />
        <SiteSection />
        <Gallery />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
