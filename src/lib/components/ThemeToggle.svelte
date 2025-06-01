<script lang="ts">
	import { getThemeContext } from '$lib/themeContext.svelte';
	import { ThemeValue } from '$lib/types/constants';

	const themeConfig = getThemeContext();

	function toggleTheme() {
		if (themeConfig.derivedTheme === ThemeValue.LIGHT || !themeConfig.derivedTheme) {
			themeConfig.selectedTheme = ThemeValue.DARK;
		} else {
			themeConfig.selectedTheme = ThemeValue.LIGHT;
		}
	}
</script>

<button
	type="button"
	class="theme-toggle"
	aria-pressed={themeConfig.derivedTheme === 'dark'}
	onclick={toggleTheme}
>
	<span class="sr-only">Toggle Site Theme</span>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="moon-svg" aria-hidden="true">
		<path
			class="moon-svg__path"
			d="M13.719 1.8A8.759 8.759 0 111.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"
		/>
	</svg>
</button>

<style>
	.theme-toggle {
		display: block;
		position: absolute;
		top: 2rem;
		right: 3.125rem;
		background-color: transparent;
		border: none;
		padding: 0;
		z-index: 2;
		transition:
			opacity 1s ease,
			transform 1s ease;

		@starting-style {
			opacity: 0;
			transform: translateY(25%);
		}

		@media (prefers-reduced-motion: reduce) {
			transition: none;
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
