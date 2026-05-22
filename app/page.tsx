import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import AboutCard from '@/components/home/AboutCard'
import ServiceCards from '@/components/home/ServiceCards'
// import StatsRow from '@/components/home/StatsRow'
// import FreeTemplateSection from '@/components/home/FreeTemplateSection'
import Footer from '@/components/layout/Footer'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutCard />
      <ServiceCards />
      {/* <StatsRow /> */}
      {/* <FreeTemplateSection /> */}
      <Footer />
    </>
  )
}
