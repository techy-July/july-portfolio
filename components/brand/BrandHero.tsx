import Button from '@/components/ui/Button'
import { MAILTO_BRAND } from '@/lib/constants'

export default function BrandHero() {
  return (
    <section className="px-5 pb-8 pt-5">
      <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
        BRAND DIGITALIZATION
      </p>

      <h1 className="mb-4 font-serif text-[32px] font-normal leading-[1.08] text-grey-900">
        From zero to a brand that{' '}
        <em className="italic text-amber-accent">commands</em>{' '}
        attention
      </h1>

      <p className="mb-6 font-sans text-[11px] leading-[1.6] text-grey-600">
        You know your business inside out. My job is to make sure the internet knows it too — and
        respects it. I work with businesses and personal brands to build digital presences that are
        clean, fast, and built to convert.
      </p>

      <Button variant="primary" href={MAILTO_BRAND}>
        Let&apos;s talk about your brand
      </Button>
    </section>
  )
}
