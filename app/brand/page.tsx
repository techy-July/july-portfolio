import BrandHero from "@/components/brand/BrandHero";
import HowIThink from "@/components/brand/HowIThink";
import ProblemsSolved from "@/components/brand/ProblemsSolved";
import Footer from "@/components/layout/Footer";
import { brandMetadata } from "@/lib/metadata";
import { MAILTO_BRAND } from "@/lib/constants";
import ProcessSteps from "@/components/brand/ProcessSteps";
import PricingSection from "@/components/brand/PricingSection";

export const metadata = brandMetadata;

export default function BrandPage() {
  return (
    <>
      <BrandHero />
      <HowIThink />
      {/* <ProblemsSolved /> */}
      {/* <ProcessSteps /> */}
      <PricingSection />
      <Footer ctaLabel="Let's talk about your brand" ctaHref={MAILTO_BRAND} />
    </>
  );
}
