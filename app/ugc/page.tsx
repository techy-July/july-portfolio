import UGCHero from '@/components/ugc/UGCHero'
import InfoStrip from '@/components/ugc/InfoStrip'
import WhatICreate from '@/components/ugc/WhatICreate'
import VideoPortfolio from '@/components/ugc/VideoPortfolio'
import EnquiryCTAStrip from '@/components/ugc/EnquiryCTAStrip'
import Footer from '@/components/layout/Footer'
import { ugcMetadata } from '@/lib/metadata'

export const metadata = ugcMetadata

export default function UGCPage() {
  return (
    <>
      <UGCHero />
      <InfoStrip />
      <WhatICreate />
      {/* <VideoPortfolio /> */}
      <EnquiryCTAStrip />
      <Footer />
    </>
  )
}
