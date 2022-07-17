import { expect, test } from '@playwright/test';

test.describe('testing index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');
	});

	test('index page has expected h1', async ({ page }) => {
		expect(await page.textContent('h1')).toBe('Holden Greene');
	});

	test('theme toggle has been loaded and checked', async ({ page }) => {
		const themeToggle = page.locator('#theme-toggle');
		await expect(themeToggle).toBeVisible();
		await expect(themeToggle).toBeChecked();
	});

	test('theme toggle changes theme and save it to localStorage', async ({ page }) => {
		const themeWrapper = page.locator('.theme-wrapper');
		const themeToggle = page.locator('.theme-toggle');

		await page.pause();

		await expect(themeWrapper).toHaveAttribute('data-theme', 'dark');

		// get initial theme value
		const theme = await themeWrapper.getAttribute('data-theme');

		await themeToggle.click();

		const storageState = (await page.context().storageState()).origins;

		expect(
			storageState[0].localStorage.find((value) => value.name === 'darkMode')
		).toBeDefined();

		expect((await themeWrapper.getAttribute('data-theme')) !== theme).toBeTruthy();

		await page.pause();
	});
});
