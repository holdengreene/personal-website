<script lang="ts">
	import 'modern-normalize/modern-normalize.css';

	import { browser } from '$app/environment';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { setThemeContext } from '$lib/themeContext.svelte';
	import type { ThemeConfig } from '$lib/types';
	import { ThemeValue } from '$lib/types/constants';

	interface Props {
		children?: import('svelte').Snippet;
	}

	const { children }: Props = $props();

	const themeConfig = $state<ThemeConfig>({ detectedTheme: undefined, selectedTheme: undefined });

	if (browser) {
		if (localStorage.getItem('theme')) {
			const config = localStorage.getItem('theme');

			if (
				config === ThemeValue.LIGHT ||
				config === ThemeValue.DARK ||
				typeof config === 'undefined'
			) {
				themeConfig.selectedTheme = config;
			}
		} else {
			if (matchMedia('(prefers-color-scheme: dark)').matches) {
				themeConfig.detectedTheme = ThemeValue.DARK;
			} else {
				themeConfig.detectedTheme = ThemeValue.LIGHT;
			}
		}
	}

	setThemeContext(themeConfig);
</script>

<div class="app" data-theme={themeConfig.selectedTheme}>
	<ThemeToggle />

	{@render children?.()}
</div>

<style>
	:where(:root) {
		color-scheme: light dark;
		--font-color: light-dark(#231f20, #ffffff);
		--highlight-color: hsl(147, 64%, 61%);
		--primary-background: light-dark(#ffffff, #121212);
		--splash-background: light-dark(var(--highlight-color), hsl(0, 0%, 17%));
		--primary-hover: light-dark(hsl(148, 65%, 92%), hsl(147, 30%, 35%));
		--primary-button-color: var(--highlight-color);
		--slight-shadow:
			0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);
		--header-font: 'bitter', serif;
		--body-font:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}

	.app {
		font-family: var(--body-font);
		color: var(--font-color);

		&[data-theme='light'] {
			color-scheme: light;
		}

		&[data-theme='dark'] {
			color-scheme: dark;
		}
	}
</style>
