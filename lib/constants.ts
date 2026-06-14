import type {
  ProductData,
  VideoCardData,
  ProcessStepData,
  WhatICreateData,
  StatData,
  CaseStudyData,
  PricingPlanData,
} from "@/types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://july-portfolio-rosy.vercel.app";
export const BRAND_NAME = "Simply Tech by July";
export const BRAND_EMAIL = "simplytechbyjuly@gmail.com";

export const MAILTO_GENERAL = `mailto:${BRAND_EMAIL}?subject=Hey%20July%20%E2%80%94%20I%27d%20love%20to%20work%20together`;

export const MAILTO_BRAND = `mailto:${BRAND_EMAIL}?subject=Let%27s%20talk%20about%20my%20brand&body=Hi%20July%2C%20I%20found%20you%20through%20your%20website%20and%20I%27m%20interested%20in%20brand%20digitalization.%20I%27d%20love%20to%20chat%20about%20working%20together.`;

export const MAILTO_UGC = `mailto:${BRAND_EMAIL}?subject=UGC%20Collab%20Enquiry&body=Hi%20July%2C%20I%27m%20reaching%20out%20about%20a%20potential%20UGC%20collaboration%20for%20%5BBrand%20Name%5D.%20I%27d%20love%20to%20discuss%20what%20we%20could%20create%20together.`;

// TODO: Replace with real Ko-fi links before launch
export const FREE_PRODUCT_URL = "https://ko-fi.com/s/b85ccd55d3";
export const PRODUCT_URL_1 = "https://ko-fi.com/s/b0fe082622";
export const PRODUCT_URL_2 = "TODO_PRODUCT_URL_2";
export const PRODUCT_URL_3 = "TODO_PRODUCT_URL_3";

// TODO: Replace with real YouTube video IDs before UGC page goes live
export const VIDEO_ID_1 = "TODO_VIDEO_ID_1";
export const VIDEO_ID_2 = "TODO_VIDEO_ID_2";
export const VIDEO_ID_3 = "TODO_VIDEO_ID_3";

export const SOCIAL_INSTAGRAM = "https://instagram.com/simplytechbyjuly";
export const SOCIAL_THREADS = "https://threads.com/@simplytechbyjuly";
export const SOCIAL_TIKTOK = "https://tiktok.com/@simplytechbyjuly";
export const SOCIAL_YOUTUBE = "https://youtube.com/@simplytechbyjuly";
export const SOCIAL_KOFI = "https://ko-fi.com/simplytechbyjuly";

// TODO: Fill in real names, descriptions, prices, images, and URLs before launch
export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    category: "prompt-pack",
    name: "Branding AI Prompt Pack",
    description:
      "15 ready-to-use AI prompts to write the hardest parts of your brand — your brand voice, your bio, and your about page — in under 60 seconds each.",
    price: "$9",
    url: PRODUCT_URL_1,
    image: "Branding_AI_Prompt_Pack_Preview.jpg",
    isFree: false,
    isBestSeller: true,
  },
  {
    id: 2,
    category: "checklist",
    name: "Brand Audit Checklist (FREE)",
    description:
      "21-point checklist that shows founders and creators exactly where their digital presence is losing them credibility, leads, and money — in under 5 minutes.",
    price: "$0",
    url: FREE_PRODUCT_URL,
    image: "Brand_Audit_preview.jpg",
    isFree: true,
    isBestSeller: false,
  },
];

export const VIDEO_CARDS: VideoCardData[] = [
  {
    videoId: VIDEO_ID_1,
    contentType: "Product Review",
    brandName: "Brand name",
    productDescription: "Product Description",
    linkLabel: "Affiliate Link ›",
    linkUrl: "TODO_VIDEO_URL_1",
  },
  {
    videoId: VIDEO_ID_2,
    contentType: "Product Review",
    brandName: "Brand name",
    productDescription: "Product Description",
    linkLabel: "Product Link ›",
    linkUrl: "TODO_VIDEO_URL_2",
  },
  {
    videoId: VIDEO_ID_3,
    contentType: "Product Review",
    brandName: "Brand name",
    productDescription: "Product Description",
    linkLabel: "Affiliate Link ›",
    linkUrl: "TODO_VIDEO_URL_3",
  },
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 1,
    problem:
      "A founder's portfolio was communicating 'I build websites' — not the actual depth of capability behind the work.",
    cost: "Cold traffic landed and left. No enquiries. No trust signal strong enough to make someone stay.",
    built:
      "A problem-first portfolio structured around outcomes — clear voice, case studies that lead with the problem, and CTAs tied to real intent.",
    result: "TODO — fill in after launch data is available.",
  },
  {
    id: 2,
    problem:
      "Founders were spending 2+ hours a day reading emails that could be summarised in under five minutes.",
    cost: "High-value decision-making time was being consumed by low-value inbox triage — at the direct expense of actual work.",
    built:
      "An agentic email reader that reads, categorises, and summarises an inbox automatically. Built with Claude AI. Project in progress.",
    result: "TODO — update when project ships.",
  },
];

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We define what your brand stands for, who it’s for, and how it should feel before a single pixel is placed.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "A custom website that carries your brand’s full weight — not a template, not a theme. Yours.",
  },
  {
    number: "03",
    title: "Launch & Hand-off",
    description:
      "You get a site you own and can use. No lock-in. Full documentation. Ready to grow with you.",
  },
];

export const WHAT_I_CREATE: WhatICreateData[] = [
  {
    title: "Product reviews & demos",
    description:
      "Honest, detailed walkthroughs that build trust before the click.",
  },
  {
    title: "Short-form social content",
    description:
      "TikTok and Reels-native videos built for scroll-stop and watch-through.",
  },
  {
    title: "Tech integration content",
    description: "Showing your tool or product in a real workflow context.",
  },
  {
    title: "Unboxing & first impression",
    description:
      "Capturing the moment your product makes its first impact on camera.",
  },
];

// Stats row — uncomment <StatsRow /> in app/page.tsx when numbers are confirmed
export const STATS: StatData[] = [
  { value: "20+", label: "Brands" },
  { value: "2M+", label: "Views" },
  { value: "500+", label: "Templates" },
];

export const PRICING_PLANS: PricingPlanData[] = [
  {
    id: 1,
    tag: "Quick win",
    title: "Brand Audit",
    description:
      "Find out exactly what your digital presence is costing you — before spending a cent on design.",
    priceUSD: "$150 USD",
    priceSGD: "~SGD 200",
    features: [
      "A clear picture of where your digital presence is losing you trust, leads, and credibility",
      "A written audit report with specific, prioritised fixes — not generic advice",
      "A ranked action plan so you know exactly what to fix first and why",
      "Clarity on whether your current presence reflects the quality of your actual business",
    ],
    deliveryTime: "Delivered within 3-5 business days",
    ctaLabel: "Get started",
    ctaHref: MAILTO_BRAND,
  },
  {
    id: 2,
    tag: "Best value",
    featured: true,
    title: "Brand Digitalization",
    description:
      "A digital presence built from the ground up — designed to reflect the real quality of your business.",
    priceUSD: "$650 USD",
    priceSGD: "~SGD 880",
    features: [
      "A brand audit that identifies exactly what's broken and what to fix",
      "A complete brand identity — brand theme, colour palette, and typography that reflect your business",
      "A custom-built website (1-2 pages + navigation) — built specifically for your brand story",
      "A site that works on every device and loads fast — ready to share or drop in your bio the moment it's delivered",
      "Full ownership — no lock-in, no subscriptions, yours completely",
    ],
    note: "+ Additional pages available — pricing discussed based on scope",
    deliveryTime: "Delivered within 7-14 business days",
    ctaLabel: "Get started",
    ctaHref: MAILTO_BRAND,
  },
  {
    id: 3,
    tag: "Website only",
    title: "Website Build",
    description:
      "Already have your brand identity sorted but just need the website to match it? This is the plan for you.",
    priceUSD: "$450 USD",
    priceSGD: "~SGD 610",
    features: [
      "A custom-built website (1-2 pages + navigation) using your existing brand assets — no templates",
      "A site that loads fast, works on every device, and is ready to share from day one",
      "A digital presence that finally matches the quality of the business behind it",
      "Full ownership — no lock-in, completely yours",
    ],
    note: "+ Additional pages available — pricing discussed based on scope",
    deliveryTime: "Delivered within 5-10 business days",
    ctaLabel: "Get started",
    ctaHref: MAILTO_BRAND,
  },
];
