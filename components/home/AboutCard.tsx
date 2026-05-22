import { Charm } from 'next/font/google'
import Pill from '@/components/ui/Pill'

const charm = Charm({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function AboutCard() {
  return (
    <div className="relative m-6 p-6 rounded-[12px] border border-grey-200 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* "Building in public" badge — overhangs top-right */}
      <span className="absolute -right-2 -top-3 rounded-full bg-teal-base px-[14px] py-[6px] font-sans text-[10px] font-normal text-white">
        Building in public
      </span>

      {/* Identity block */}
      <div className="mb-3 flex items-start gap-3">
        <span
          className={`${charm.className} text-[64px] leading-none text-lavender-soft`}
          style={{ opacity: 0.5 }}
          aria-hidden="true"
        >
          J
        </span>
        <div className="flex flex-col gap-1 pt-1">
          <p className="font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
            ABOUT ME
          </p>
          <Pill variant="username" className="w-fit text-teal-muted">SimplyTechbyJuly</Pill>
          <p className="font-sans text-[10px] text-grey-400">
            Brand Builder · Software Engineer · Content Creator
          </p>
        </div>
      </div>

      {/* Skill pills */}
      <div className="mb-3 flex flex-wrap gap-2">
        <Pill variant="skill">Branding Sites</Pill>
        <Pill variant="skill">Brand Collabs</Pill>
        <Pill variant="skill">Digital Products</Pill>
      </div>

      <hr className="mb-3 border-t border-grey-200" />

      {/* Bio */}
      <p className="mb-2 font-sans text-[11px] leading-[1.6] text-grey-800">
        I&apos;m a software engineer who builds in public (learning, creating, and shipping digital
        tools and brand experiences while documenting every step). My work sits at the crossroads of
        AI, cybersecurity, and honest storytelling.
      </p>
      <p className="font-sans text-[11px] leading-[1.6] text-grey-800">
        Whether you&apos;re a solo founder or a growing team, I help you build a digital home that
        earns trust before you say a word.
      </p>
    </div>
  )
}
