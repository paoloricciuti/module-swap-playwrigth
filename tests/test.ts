import { expect, test } from '@playwright/test';
import { seed } from '../src/db/__mocks__/get-data';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	seed({
		userId: 69,
		id: 420,
		title: 'nice',
		completed: true
	});
	// checking for the literal seeded data...this test pass
	await expect(
		page.getByText(`{"userId":1,"id":1,"title":"delectus aut autem","completed":false}`)
	).toBeVisible();
});
