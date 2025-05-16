import { expect, test } from '@playwright/test'

test('homepage business count and search', async ({ page }) => {
  await page.goto('/')

  // Wait for sidebar to load and get the initial count
  const sidebarCount = page.getByTestId('business-count')
  const initialText = await sidebarCount.textContent()

  expect(initialText).toBe('30 resultados')

  // Type a search term in the search bar
  const searchInput = page.getByPlaceholder('Buscar comercios...')
  await searchInput.fill('Café Patagonia')
  await page.waitForTimeout(500)

  // Assert that the count is 1
  const newText = await sidebarCount.textContent()
  expect(newText).toBe('1 resultado para "Café Patagonia"')
})
