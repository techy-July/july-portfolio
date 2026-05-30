import Image from "next/image";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import SectionDivider from "@/components/ui/SectionDivider";
import { FREE_PRODUCT_URL, PRODUCT_URL_1 } from "@/lib/constants";

export default function FreeTemplateSection() {
  return (
    <section id="free-template" className="bg-white pb-8">
      <SectionDivider label="FREE TO START" />

      <div className="mx-4 mt-4 flex gap-4 rounded-[8px] bg-white p-4">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-3">
          <Pill
            variant="free-tag"
            className="w-fit !bg-sage-light !text-teal-base"
          >
            FREE
          </Pill>
          <div>
            <p className="font-sans text-[13px] font-medium leading-[1.3] text-grey-800">
              Brand Audit Checklist
            </p>
            <p className="mt-1 font-sans text-[10px] text-grey-400">
              21-point checklist that shows founders and creators exactly where their digital presence is losing them credibility, leads, and money — in under 5 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" href={PRODUCT_URL_1} external>
              Explore products
            </Button>
            <Button variant="ghost" href={FREE_PRODUCT_URL} external>
              GET FREE
            </Button>
          </div>
        </div>

        {/* Right product preview placeholder */}
        <div className="flex h-[110px] w-[120px] flex-shrink-0 items-center justify-center rounded-[6px]">
          <Image
            src="/assets/Brand_Audit_preview.jpg"
            alt="Product preview"
            width={120}
            height={110}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
