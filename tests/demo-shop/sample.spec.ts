import { test, expect } from '@playwright/test';

test('loads products when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:3000/products');

  const [response] = await Promise.all([
    page.waitForResponse(res => res.url().includes('/api/products')),
    page.getByRole('button', { name: 'Load Products' }).click()
  ]);

  const data = await response.json();
  console.log('Received:', data.length);

  await expect(page.locator('.product-item')).toHaveCount(data.length);
});

