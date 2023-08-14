import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	// checking for the literal seeded data...this test pass
	await expect(
		page.getByText(`{"userId":69,"id":420,"title":"nice","completed":true}`)
	).toBeVisible();
});
