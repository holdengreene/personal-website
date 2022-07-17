<script lang="ts">
	import { darkMode } from '$lib/store';
</script>

<div class="theme-wrapper" data-theme={$darkMode ? 'dark' : 'light'}>
	<slot />
</div>

<style lang="scss" global>
	@use 'sass:color';
	@use '../scss/main.scss';
	@use '../lib/scss/variables';

	// Still use sass variables here to ensure consistency
	.theme-wrapper {
		--font-color: #{variables.$font-color};
		--primary-background: #{variables.$primary-background};
		--splash-background: #{variables.$splash-background};
		--green-hover: #{variables.$green-hover};
	}

	@media (prefers-color-scheme: dark) {
		.theme-wrapper:not([data-theme='light']) {
			--font-color: #fff;
			--primary-background: #121212;
			--splash-background: #2b2b2b;
			--green-hover: #{variables.$darker-splash};
		}
	}

	.theme-wrapper[data-theme='dark'] {
		--font-color: #fff;
		--primary-background: #121212;
		--splash-background: #2b2b2b;
		--green-hover: #{variables.$darker-splash};
	}
</style>
