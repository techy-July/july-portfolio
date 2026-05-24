import type { ProductData, VideoCardData, ProcessStepData, WhatICreateData, StatData } from '@/types'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://simplytechbyjuly.com'
export const BRAND_NAME = 'Simply Tech by July'
export const BRAND_EMAIL = 'simplytechbyjuly@gmail.com'

export const MAILTO_GENERAL =
  `mailto:${BRAND_EMAIL}?subject=Hey%20July%20%E2%80%94%20I%27d%20love%20to%20work%20together`

export const MAILTO_BRAND =
  `mailto:${BRAND_EMAIL}?subject=Let%27s%20talk%20about%20my%20brand&body=Hi%20July%2C%20I%20found%20you%20through%20your%20website%20and%20I%27m%20interested%20in%20brand%20digitalization.%20I%27d%20love%20to%20chat%20about%20working%20together.`

export const MAILTO_UGC =
  `mailto:${BRAND_EMAIL}?subject=UGC%20Collab%20Enquiry&body=Hi%20July%2C%20I%27m%20reaching%20out%20about%20a%20potential%20UGC%20collaboration%20for%20%5BBrand%20Name%5D.%20I%27d%20love%20to%20discuss%20what%20we%20could%20create%20together.`

// TODO: Replace with real Ko-fi links before launch
export const FREE_TEMPLATE_URL = 'https://ko-fi.com/s/b85ccd55d3'
export const PRODUCT_URL_1 = 'TODO_PRODUCT_URL_1'
export const PRODUCT_URL_2 = 'TODO_PRODUCT_URL_2'
export const PRODUCT_URL_3 = 'TODO_PRODUCT_URL_3'

// TODO: Replace with real YouTube video IDs before UGC page goes live
export const VIDEO_ID_1 = 'TODO_VIDEO_ID_1'
export const VIDEO_ID_2 = 'TODO_VIDEO_ID_2'
export const VIDEO_ID_3 = 'TODO_VIDEO_ID_3'

export const SOCIAL_INSTAGRAM = 'https://instagram.com/simplytechbyjuly'
export const SOCIAL_THREADS    = 'https://threads.com/@simplytechbyjuly'
export const SOCIAL_TIKTOK    = 'https://tiktok.com/@techy_july'
export const SOCIAL_YOUTUBE    = 'https://youtube.com/@july-in-tech'
export const SOCIAL_KOFI       = 'https://ko-fi.com/simplytechbyjuly'

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    category: 'TODO',
    name: 'TODO',
    description: 'TODO',
    price: 'TODO',
    url: PRODUCT_URL_1,
    isBestSeller: false,
  },
  {
    id: 2,
    category: 'TODO',
    name: 'TODO',
    description: 'TODO',
    price: 'TODO',
    url: PRODUCT_URL_2,
    isBestSeller: true,
  },
  {
    id: 3,
    category: 'TODO',
    name: 'TODO',
    description: 'TODO',
    price: 'TODO',
    url: PRODUCT_URL_3,
    isBestSeller: false,
  },
]

export const VIDEO_CARDS: VideoCardData[] = [
  {
    videoId: VIDEO_ID_1,
    contentType: 'Product Review',
    brandName: 'Brand name',
    productDescription: 'Product Description',
    linkLabel: 'Affiliate Link ›',
    linkUrl: 'TODO_VIDEO_URL_1',
  },
  {
    videoId: VIDEO_ID_2,
    contentType: 'Product Review',
    brandName: 'Brand name',
    productDescription: 'Product Description',
    linkLabel: 'Product Link ›',
    linkUrl: 'TODO_VIDEO_URL_2',
  },
  {
    videoId: VIDEO_ID_3,
    contentType: 'Product Review',
    brandName: 'Brand name',
    productDescription: 'Product Description',
    linkLabel: 'Affiliate Link ›',
    linkUrl: 'TODO_VIDEO_URL_3',
  },
]

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We define what your brand stands for, who it’s for, and how it should feel before a single pixel is placed.",
  },
  {
    number: '02',
    title: 'Design & Build',
    description:
      "A custom website that carries your brand’s full weight — not a template, not a theme. Yours.",
  },
  {
    number: '03',
    title: 'Launch & Hand-off',
    description:
      'You get a site you own and can use. No lock-in. Full documentation. Ready to grow with you.',
  },
]

export const WHAT_I_CREATE: WhatICreateData[] = [
  {
    title: 'Product reviews & demos',
    description: 'Honest, detailed walkthroughs that build trust before the click.',
  },
  {
    title: 'Short-form social content',
    description: 'TikTok and Reels-native videos built for scroll-stop and watch-through.',
  },
  {
    title: 'Tech integration content',
    description: 'Showing your tool or product in a real workflow context.',
  },
  {
    title: 'Unboxing & first impression',
    description: 'Capturing the moment your product makes its first impact on camera.',
  },
]

// Stats row — uncomment <StatsRow /> in app/page.tsx when numbers are confirmed
export const STATS: StatData[] = [
  { value: '20+', label: 'Brands' },
  { value: '2M+', label: 'Views' },
  { value: '500+', label: 'Templates' },
]
