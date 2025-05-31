<script lang="ts">
	import { getThemeContext } from '$lib/themeContext.svelte';
	import type { ThemeValueType } from '$lib/types';
	import { themeStorageKey, ThemeValue } from '$lib/types/constants';

	const themeConfig = getThemeContext();
	let theme = $derived<ThemeValueType>(themeConfig.selectedTheme ?? themeConfig.detectedTheme);

	function toggleTheme() {
		if (theme === ThemeValue.LIGHT || !theme) {
			themeConfig.selectedTheme = ThemeValue.DARK;
		} else {
			themeConfig.selectedTheme = ThemeValue.LIGHT;
		}

		localStorage.setItem(themeStorageKey, themeConfig.selectedTheme);
	}
</script>

<button type="button" class="theme-toggle" aria-pressed={theme === 'dark'} onclick={toggleTheme}>
	<span class="sr-only">Toggle Site Theme</span>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="moon-svg" aria-hidden="true">
		<path
			class="moon-svg__path"
			d="M13.719 1.8A8.759 8.759 0 111.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"
		/>
	</svg>
</button>

<style>
	@import '$lib/css/_movement.css';

	.theme-toggle {
		display: block;
		position: absolute;
		top: 2rem;
		right: 3.125rem;
		background-color: transparent;
		border: none;
		padding: 0;
		z-index: 2;
		opacity: 0;
		animation: 1s fadeUp forwards ease;
		@media (prefers-reduced-motion: reduce) {
			animation: none;
			opacity: 1;
		}
	}

	.moon-svg {
		width: 1.875rem;
		cursor: pointer;
	}

	.moon-svg__path {
		fill: light-dark(#ffffff, var(--primary-button-color));
		stroke: light-dark(var(--font-color), var(--primary-button-color));
		transition:
			fill 0.3s ease,
			stroke 0.3s ease;
	}

	.sr-only {
		position: absolute;
		top: auto;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		width: 1px;
		height: 1px;
		white-space: nowrap;
	}
</style>
