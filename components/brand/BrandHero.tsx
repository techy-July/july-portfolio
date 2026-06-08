import Button from "@/components/ui/Button";
import { MAILTO_BRAND } from "@/lib/constants";

export default function BrandHero() {
  return (
    <section className="px-5 pb-8 pt-5">
      <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
        BRAND DIGITALIZATION
      </p>

      <h1 className="mb-4 font-serif text-[32px] font-normal leading-[1.08] text-grey-900">
        I build digital solutions to problems that are{" "}
        <em className="italic text-amber-accent">costing you something.</em>
      </h1>

      <p className="mb-6 font-sans text-[11px] leading-[1.6] text-grey-600">
        Whether it&apos;s a website that isn&apos;t converting, a workflow
        that&apos;s eating your time, or a brand that doesn&apos;t reflect the
        business you&apos;ve actually built — I find what&apos;s broken and fix
        it properly.
      </p>

      <Button variant="primary" href={MAILTO_BRAND}>
        Let&apos;s talk about your brand
      </Button>
    </section>
  );
}
