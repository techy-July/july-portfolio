import { test, expect } from '@playwright/test'

const routes = ['/', '/brand', '/ugc']

for (const route of routes) {
  test(`${route} — X-Frame-Options: SAMEORIGIN`, async ({ request }) => {
    const response = await request.get(`http://localhost:3000${route}`)
    expect(response.headers()['x-frame-options']).toBe('SAMEORIGIN')
  })

  test(`${route} — X-Content-Type-Options: nosniff`, async ({ request }) => {
    const response = await request.get(`http://localhost:3000${route}`)
    expect(response.headers()['x-content-type-options']).toBe('nosniff')
  })

  test(`${route} — Content-Security-Policy present with frame-ancestors`, async ({ request }) => {
    const response = await request.get(`http://localhost:3000${route}`)
    const csp = response.headers()['content-security-policy']
    expect(csp).toBeTruthy()
    expect(csp).toContain("frame-ancestors 'self'")
  })

  test(`${route} — Referrer-Policy present`, async ({ request }) => {
    const response = await request.get(`http://localhost:3000${route}`)
    expect(response.headers()['referrer-policy']).toBe('strict-origin-when-cross-origin')
  })

  test(`${route} — Strict-Transport-Security present`, async ({ request }) => {
    const response = await request.get(`http://localhost:3000${route}`)
    expect(response.headers()['strict-transport-security']).toContain('max-age=')
  })
}
