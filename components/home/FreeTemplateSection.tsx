import Button from '@/components/ui/Button'
import Pill from '@/components/ui/Pill'
import SectionDivider from '@/components/ui/SectionDivider'
import { FREE_TEMPLATE_URL, PRODUCT_URL_1 } from '@/lib/constants'

export default function FreeTemplateSection() {
  return (
    <section id="free-template" className="bg-white pb-8">
      <SectionDivider label="FREE TO START" />

      <div className="mx-4 mt-4 flex gap-4 rounded-[8px] bg-white p-4">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-3">
          <Pill variant="free-tag" className='w-fit !bg-sage-light !text-teal-base'>FREE</Pill>
          <div>
            <p className="font-sans text-[13px] font-medium leading-[1.3] text-grey-800">
              Highlight product description template
            </p>
            <p className="mt-1 font-sans text-[10px] text-grey-400">Product description</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" href={PRODUCT_URL_1} external>
              Explore products
            </Button>
            <Button variant="ghost" href={FREE_TEMPLATE_URL} external>
              GET FREE
            </Button>
          </div>
        </div>

        {/* Right product preview placeholder */}
        <div className="flex h-[70px] w-[80px] flex-shrink-0 items-center justify-center rounded-[6px] bg-grey-100 mt-6">
          <span className="font-sans text-[11px] text-grey-400">Product 1</span>
        </div>
      </div>
    </section>
  )
}
