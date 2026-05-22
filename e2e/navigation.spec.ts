import { test, expect } from '@playwright/test'

test('logo on /brand navigates to /', async ({ page }) => {
  await page.goto('/brand')
  await page.click('a[href="/"]')
  await expect(page).toHaveURL('/')
})

test('logo on /ugc navigates to /', async ({ page }) => {
  await page.goto('/ugc')
  await page.click('a[href="/"]')
  await expect(page).toHaveURL('/')
})

test('"Brand Digitalization" nav link from / navigates to /brand', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /brand digitalization/i }).first().click()
  await expect(page).toHaveURL('/brand')
})

test('"UGC Collabs" nav link from / navigates to /ugc', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /ugc collabs/i }).first().click()
  await expect(page).toHaveURL('/ugc')
})

test('Nav is sticky — present and has sticky class', async ({ page }) => {
  await page.goto('/')
  const nav = page.locator('nav')
  await expect(nav).toBeVisible()
  // Verify the nav has sticky positioning via CSS class
  const hasSticky = await nav.evaluate((el) =>
    el.classList.contains('sticky') || getComputedStyle(el).position === 'sticky',
  )
  expect(hasSticky).toBe(true)
})

test('"Products" link is NOT visible in nav on any page', async ({ page }) => {
  for (const route of ['/', '/brand', '/ugc']) {
    await page.goto(route)
    const productsLink = page.locator('nav').getByRole('link', { name: /^products$/i })
    await expect(productsLink).not.toBeVisible()
  }
})

test('service card "Build your brand" from / navigates to /brand', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /build your brand with july/i }).click()
  await expect(page).toHaveURL('/brand')
})

test('service card "Start a collab" from / navigates to /ugc', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /start a collab with july/i }).click()
  await expect(page).toHaveURL('/ugc')
})
