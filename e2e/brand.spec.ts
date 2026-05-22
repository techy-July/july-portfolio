import { test, expect } from '@playwright/test'

test('"Let\'s talk about your brand" button is visible in the hero', async ({ page }) => {
  await page.goto('/brand')
  const btn = page.getByRole('link', { name: /let's talk about your brand/i }).first()
  await expect(btn).toBeVisible()
})

test('hero CTA has mailto href with correct email and subject', async ({ page }) => {
  await page.goto('/brand')
  const btn = page.getByRole('link', { name: /let's talk about your brand/i }).first()
  const href = await btn.getAttribute('href')
  expect(href).toContain('simplytechbyjuly@gmail.com')
  // Subject is URL-encoded: "Let's talk about my brand" → "Let%27s%20talk%20about%20my%20brand"
  expect(href).toContain('talk%20about%20my%20brand')
})

test('all 3 process steps are visible', async ({ page }) => {
  await page.goto('/brand')
  await expect(page.getByText('Discovery & Strategy')).toBeVisible()
  await expect(page.getByText('Design & Build')).toBeVisible()
  await expect(page.getByText('Launch & Hand-off')).toBeVisible()
})

test('footer CTA on brand page is "Let\'s talk about your brand"', async ({ page }) => {
  await page.goto('/brand')
  const footerCTA = page.locator('footer').getByRole('link', { name: /let's talk about your brand/i })
  await expect(footerCTA).toBeVisible()
})

test('footer CTA on brand page has mailto with correct email', async ({ page }) => {
  await page.goto('/brand')
  const footerCTA = page.locator('footer').getByRole('link', { name: /let's talk about your brand/i })
  const href = await footerCTA.getAttribute('href')
  expect(href).toContain('simplytechbyjuly@gmail.com')
})
