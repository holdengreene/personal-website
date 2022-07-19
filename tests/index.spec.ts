import { expect, test } from '@playwright/test';

console.log(process.env.CI);

test.describe('testing index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('index page has expected h1', async ({ page }) => {
		expect(await page.textContent('h1')).toBe('Holden Greene');
	});

	test('index page has no visual regressions', async ({ page }) => {
		await expect(page).toHaveScreenshot();
	});

	test('theme toggle has been loaded and checked', async ({ page }) => {
		await expect(page.locator('#theme-toggle')).toBeVisible();
	});

	test('theme toggle changes theme and saves it to localStorage', async ({ page }) => {
		// const themeWrapper = page.locator('.theme-wrapper');
		const themeToggle = page.locator('.theme-toggle');

		// get initial theme value
		// const theme = await themeWrapper.getAttribute('data-theme');

		await themeToggle.click();

		const storageState = (await page.context().storageState()).origins;

		expect(
			storageState[0].localStorage.find((value) => value.name === 'darkMode')
		).toBeDefined();
	});
});

test.describe('testing dark mode', () => {
	test.beforeEach(async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');
	});

	test('theme toggle is checked', async ({ page }) => {
		await expect(page.locator('#theme-toggle')).toBeChecked();
	});

	test('theme defaults to dark mode', async ({ page }) => {
		await expect(page.locator('.theme-wrapper')).toHaveAttribute('data-theme', 'dark');
	});

	test('theme toggle changes to light mode', async ({ page }) => {
		await page.locator('.theme-toggle').click();

		await expect(page.locator('.theme-wrapper')).toHaveAttribute('data-theme', 'light');
		await expect(page.locator('#theme-toggle')).not.toBeChecked();
	});
});

test.describe('testing light mode', () => {
	test.beforeEach(async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'light' });
		await page.goto('/');
	});

	test('theme toggle is not checked', async ({ page }) => {
		await expect(page.locator('#theme-toggle')).not.toBeChecked();
	});

	test('theme defaults to light mode', async ({ page }) => {
		await expect(page.locator('.theme-wrapper')).toHaveAttribute('data-theme', 'light');
	});

	test('theme toggle changes to dark mode', async ({ page }) => {
		await page.locator('.theme-toggle').click();

		await expect(page.locator('.theme-wrapper')).toHaveAttribute('data-theme', 'dark');
		await expect(page.locator('#theme-toggle')).toBeChecked();
	});
});
