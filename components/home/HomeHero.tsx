import Button from '@/components/ui/Button'

export default function HomeHero() {
  return (
    <section className="px-5 pb-8 pt-5">
      <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
        BRAND · UGC · DIGITAL PRODUCTS
      </p>

      <h1 className="mb-4 font-serif text-[42px] font-semibold leading-[1.03] text-grey-900">
        Your brand,{' '}
        <em className="italic text-amber-accent">built</em>{' '}
        for the digital age.
      </h1>

      <p className="mb-2 font-sans text-[11px] leading-[1.6] text-grey-600">
        I turn businesses and personal brands into polished digital presences — and help
        brands reach audiences through authentic UGC and ready-to-use digital tools.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button variant="primary" href="/brand">
          Build my brand
        </Button>

        <Button variant="ghost" href="/products">
          Browse products
        </Button>
      </div>

      <p className="pt-3 font-sans text-[10px] text-grey-400">
        ↓ free template waiting below — no sign-up needed
      </p>
    </section>
  )
}
