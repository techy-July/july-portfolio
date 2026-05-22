import { test, expect } from '@playwright/test'

const pages = ['/', '/brand', '/ugc']

for (const route of pages) {
  test(`${route} — all target="_blank" links have rel="noopener noreferrer"`, async ({ page }) => {
    await page.goto(route)

    const externalLinks = await page.locator('a[target="_blank"]').all()

    for (const link of externalLinks) {
      const rel = await link.getAttribute('rel')
      expect(rel, `Link on ${route} missing noopener`).toContain('noopener')
      expect(rel, `Link on ${route} missing noreferrer`).toContain('noreferrer')
    }
  })
}
