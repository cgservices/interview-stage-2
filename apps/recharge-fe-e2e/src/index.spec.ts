import { expect, test } from '@playwright/test';

test('should open home page', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:4200');

  expect(page.getByText('home page')).toBeTruthy();
});
