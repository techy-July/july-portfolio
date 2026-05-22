export interface ProductData {
  id: number
  category: string
  name: string
  description: string
  price: string
  url: string
  isBestSeller: boolean
}

export interface VideoCardData {
  videoId: string
  contentType: string
  brandName: string
  productDescription: string
  linkLabel: string
  linkUrl: string
}

export interface ProcessStepData {
  number: string
  title: string
  description: string
}

export interface WhatICreateData {
  title: string
  description: string
}

export interface StatData {
  value: string
  label: string
}
