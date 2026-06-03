import type { Metadata } from "next";
import { SITE_URL, BRAND_NAME } from "@/lib/constants";

export const rootMetadata: Metadata = {
  title: {
    default: `${BRAND_NAME} — Brand · UGC · Digital Products`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "July builds digital presences for founders and creators — brand sites, UGC content, and digital products.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
    images: [
      {
        url: "/assets/Brand_OG.png",
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const brandMetadata: Metadata = {
  title: "Brand Digitalization",
  description:
    "From strategy to a live branded website. July builds your entire digital presence so your brand commands attention.",
  alternates: { canonical: `${SITE_URL}/brand` },
  openGraph: {
    url: `${SITE_URL}/brand`,
    // TODO: Replace with brand OG image once available
  },
};

export const ugcMetadata: Metadata = {
  title: "UGC Collabs",
  description:
    "Authentic, scroll-stopping UGC content for tech and lifestyle brands. TikTok and Reels-native videos built to convert.",
  alternates: { canonical: `${SITE_URL}/ugc` },
  openGraph: {
    url: `${SITE_URL}/ugc`,
    // TODO: Replace with brand OG image once available
  },
};
