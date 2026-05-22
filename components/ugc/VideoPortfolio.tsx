import SectionDivider from '@/components/ui/SectionDivider'
import VideoCard from './VideoCard'
import { VIDEO_CARDS } from '@/lib/constants'

export default function VideoPortfolio() {
  return (
    <section>
      <SectionDivider label="PREVIOUS WORK" />

      <div className="flex items-baseline justify-between px-5 py-4">
        <h2 className="font-serif text-[22px] font-normal text-grey-900">
          Work that moves the needle
        </h2>
        <span className="font-sans text-[10px] text-grey-400">Click to preview</span>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-6">
        {VIDEO_CARDS.map((card, index) => (
          <VideoCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}
