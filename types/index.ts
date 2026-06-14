export type ProductCategory =
  // | "template"
  "checklist" | "prompt-pack";
// | "affiliate";

export interface ProductData {
  id: number;
  category: ProductCategory;
  name: string;
  description: string;
  price: string;
  url: string;
  image?: string;
  isFree?: boolean;
  isBestSeller?: boolean;
}

export interface VideoCardData {
  videoId: string;
  contentType: string;
  brandName: string;
  productDescription: string;
  linkLabel: string;
  linkUrl: string;
}

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudyData {
  id: number;
  problem: string;
  cost: string;
  built: string;
  result: string;
}

export interface WhatICreateData {
  title: string;
  description: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface PricingPlanData {
  id: number;
  tag: string;
  featured?: boolean;
  title: string;
  description: string;
  priceUSD: string;
  priceSGD: string;
  features: string[];
  note?: string;
  deliveryTime: string;
  ctaLabel: string;
  ctaHref: string;
}
