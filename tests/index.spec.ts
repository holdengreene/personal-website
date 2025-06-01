import { expect, test } from '@playwright/test';

test.describe('testing index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('index page has expected h1', async ({ page }) => {
		expect(await page.textContent('h1')).toBe('Holden Greene');
	});

	test('theme toggle has been loaded and checked', async ({ page }) => {
		await expect(page.locator('.theme-toggle')).toBeVisible();
	});

	test('theme toggle changes theme and saves it to localStorage', async ({ page }) => {
		const themeToggle = page.locator('.theme-toggle');

		await themeToggle.click();

		const storageState = (await page.context().storageState()).origins;

		const theme = storageState[0].localStorage.find((value) => value.name === 'theme');

		expect(theme).toBeDefined();

		expect(theme?.value).toBe('dark');
	});
});

test.describe('testing dark mode', () => {
	test.beforeEach(async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');
	});

	test('theme toggle is checked', async ({ page }) => {
		await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'true');
	});

	test('theme toggle changes to light mode', async ({ page }) => {
		await page.locator('.theme-toggle').click();

		await expect(page.locator('.app')).toHaveAttribute('data-theme', 'light');
		await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'false');
	});
});

test.describe('testing light mode', () => {
	test.beforeEach(async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'light' });
		await page.goto('/');
	});

	test('theme toggle is not checked', async ({ page }) => {
		await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'false');
	});

	test('theme toggle changes to dark mode', async ({ page }) => {
		await page.locator('.theme-toggle').click();

		await expect(page.locator('.app')).toHaveAttribute('data-theme', 'dark');
		await expect(page.locator('.theme-toggle')).toHaveAttribute('aria-pressed', 'true');
	});
});
