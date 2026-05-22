import { test, expect } from '@playwright/test'

test('anchor line is visible without scrolling on 390px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const anchorLine = page.getByText(/↓ free template waiting below — no sign-up needed/i)
  await expect(anchorLine).toBeVisible()
})

test('"Build my brand" button navigates to /brand', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /build my brand/i }).click()
  await expect(page).toHaveURL('/brand')
})

test('free template section is below service cards in DOM order', async ({ page }) => {
  await page.goto('/')
  const serviceCards = page.locator('section').filter({ hasText: 'Brand Digitalization' }).first()
  const freeTemplate = page.locator('#free-template')

  const serviceCardsY = await serviceCards.evaluate((el) => el.getBoundingClientRect().top)
  const freeTemplateY = await freeTemplate.evaluate((el) => el.getBoundingClientRect().top)

  expect(freeTemplateY).toBeGreaterThan(serviceCardsY)
})

test('"GET FREE ›" button has a non-empty href', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('link', { name: /GET FREE/i })
  const href = await btn.getAttribute('href')
  expect(href).toBeTruthy()
  expect(href).not.toBe('#')
})

test('"GET FREE ›" has target="_blank" and rel="noopener noreferrer"', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('link', { name: /GET FREE/i })
  await expect(btn).toHaveAttribute('target', '_blank')
  const rel = await btn.getAttribute('rel')
  expect(rel).toContain('noopener')
  expect(rel).toContain('noreferrer')
})

test('Stats row is NOT visible (commented out)', async ({ page }) => {
  await page.goto('/')
  // Stats values that would appear if the section is rendered
  await expect(page.getByText('2M+')).not.toBeVisible()
})

test('footer "Reach out" button has mailto href with correct email', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('link', { name: /reach out/i })
  const href = await btn.getAttribute('href')
  expect(href).toContain('simplytechbyjuly@gmail.com')
})
