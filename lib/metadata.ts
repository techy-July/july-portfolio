import type { Metadata } from "next";
import { SITE_URL, BRAND_NAME } from "@/lib/constants";

const OG_IMAGE = {
  url: "/assets/brand_OG.jpg",
  width: 1200,
  height: 630,
  alt: BRAND_NAME,
};

export const rootMetadata: Metadata = {
  title: {
    default: `${BRAND_NAME} — I find what's broken in your digital presence and build the fix.`,
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
    images: [OG_IMAGE],
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
    images: [OG_IMAGE],
  },
};

export const ugcMetadata: Metadata = {
  title: "UGC Collabs",
  description:
    "Authentic, scroll-stopping UGC content for tech and lifestyle brands. TikTok and Reels-native videos built to convert.",
  alternates: { canonical: `${SITE_URL}/ugc` },
  openGraph: {
    url: `${SITE_URL}/ugc`,
    images: [OG_IMAGE],
  },
};

export const productsMetadata: Metadata = {
  title: "Digital Products",
  description:
    "Templates, checklists, and prompt packs to help founders and creators move faster.",
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    url: `${SITE_URL}/products`,
    images: [OG_IMAGE],
  },
};
