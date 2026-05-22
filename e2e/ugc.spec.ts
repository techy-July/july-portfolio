import { test, expect } from '@playwright/test'
import { MAILTO_UGC } from '../lib/constants'

test('"Enquire about a collab" hero button is visible without scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/ugc')
  const btn = page.getByRole('link', { name: /enquire about a collab/i })
  await expect(btn).toBeVisible()
})

test('hero enquiry button has MAILTO_UGC href', async ({ page }) => {
  await page.goto('/ugc')
  const btn = page.getByRole('link', { name: /enquire about a collab/i })
  await expect(btn).toHaveAttribute('href', MAILTO_UGC)
})

test('"ENQUIRE" strip button has identical href to hero enquiry button', async ({ page }) => {
  await page.goto('/ugc')
  const heroBtnHref = await page.getByRole('link', { name: /enquire about a collab/i }).getAttribute('href')
  const stripBtnHref = await page.getByRole('link', { name: /^enquire$/i }).getAttribute('href')
  expect(heroBtnHref).toBe(stripBtnHref)
})

test('info strip renders FORMAT, PLATFORM, NICHE labels', async ({ page }) => {
  await page.goto('/ugc')
  // Scroll info strip into view — it sits below the hero on mobile
  // Use exact: true to avoid matching "platform-native" in body copy (getByText is case-insensitive by default)
  await page.getByText('FORMAT', { exact: true }).scrollIntoViewIfNeeded()
  await expect(page.getByText('FORMAT', { exact: true })).toBeVisible()
  await expect(page.getByText('PLATFORM', { exact: true })).toBeVisible()
  await expect(page.getByText('NICHE', { exact: true })).toBeVisible()
})

test('all 4 "What I create" items are visible', async ({ page }) => {
  await page.goto('/ugc')
  await expect(page.getByText('Product reviews & demos')).toBeVisible()
  await expect(page.getByText('Short-form social content')).toBeVisible()
  await expect(page.getByText('Tech integration content')).toBeVisible()
  await expect(page.getByText('Unboxing & first impression')).toBeVisible()
})

test('3 video card placeholders render (no real iframes)', async ({ page }) => {
  await page.goto('/ugc')
  const placeholders = page.getByText(/video embed/i)
  await expect(placeholders).toHaveCount(3)
})

test('no real YouTube iframes in the DOM (all videoIds are TODO placeholders)', async ({ page }) => {
  await page.goto('/ugc')
  const iframes = page.locator('iframe[src*="youtube"]')
  await expect(iframes).toHaveCount(0)
})

test('video card container is horizontally scrollable', async ({ page }) => {
  await page.goto('/ugc')
  const scrollEl = page.locator('[class*="overflow-x"]')
  await expect(scrollEl).toBeVisible()
})
