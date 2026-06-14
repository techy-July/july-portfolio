import SectionDivider from "@/components/ui/SectionDivider";
import PricingCard from "./PricingCard";
import { PRICING_PLANS } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section>
      <SectionDivider label="SERVICES & PRICING" />
      <div className="grid grid-cols-1 gap-4 px-5 py-4 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
}
