import BrandHero from "@/components/brand/BrandHero";
import HowIThink from "@/components/brand/HowIThink";
import ProcessSteps from "@/components/brand/ProcessSteps";
import Footer from "@/components/layout/Footer";
import { brandMetadata } from "@/lib/metadata";
import { MAILTO_BRAND } from "@/lib/constants";

export const metadata = brandMetadata;

export default function BrandPage() {
  return (
    <>
      <BrandHero />
      <HowIThink />
      {/* <ProcessSteps /> */}
      <Footer ctaLabel="Let's talk about your brand" ctaHref={MAILTO_BRAND} />
    </>
  );
}
