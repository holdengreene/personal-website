<script lang="ts">
	import { darkMode } from '$lib/store';
</script>

<div class="theme-wrapper" data-theme={$darkMode ? 'dark' : 'light'}>
	<slot />
</div>

<style lang="scss">
	@use '../../scss/variables';

	.theme-wrapper {
		--font-color: #{variables.$font-color};
		--primary-background: #{variables.$primary-background};
		--splash-background: #{variables.$splash-background};
		--green-hover: #{variables.$green-hover};
	}

	@media (prefers-color-scheme: dark) {
		.theme-wrapper:not([data-theme='light']) {
			--font-color: #{variables.$dm-font-color};
			--primary-background: #{variables.$dm-primary-background};
			--splash-background: #{variables.$dm-splash-background};
			--green-hover: #{variables.$dm-green-hover};
		}
	}

	.theme-wrapper[data-theme='dark'] {
		--font-color: #{variables.$dm-font-color};
		--primary-background: #{variables.$dm-primary-background};
		--splash-background: #{variables.$dm-splash-background};
		--green-hover: #{variables.$dm-green-hover};
	}

	.theme-wrapper {
		font-family: variables.$body-font;
		color: var(--font-color);
	}
</style>
