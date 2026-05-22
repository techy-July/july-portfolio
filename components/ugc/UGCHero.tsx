import Button from '@/components/ui/Button'
import { MAILTO_UGC } from '@/lib/constants'

export default function UGCHero() {
  return (
    <section className="px-5 pb-8 pt-5">
      <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
        UGC COLLABS &amp; AFFILIATE
      </p>

      <h1 className="mb-4 font-serif text-[40px] font-normal leading-[1.05] text-grey-900">
        Real content.
        <br />
        Real audiences.
        <br />
        Real results.
      </h1>

      <p className="mb-6 font-sans text-[11px] leading-[1.6] text-grey-600">
        Brands that win on social aren&apos;t the loudest — they&apos;re the most relatable. I
        create UGC content for tech and lifestyle brands that fits naturally into real
        people&apos;s feeds. Authentic, conversion-focused, and platform-native.
      </p>

      <Button variant="primary" href={MAILTO_UGC}>
        Enquire about a collab
      </Button>
    </section>
  )
}
