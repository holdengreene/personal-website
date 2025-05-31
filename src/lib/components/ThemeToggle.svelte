<script lang="ts">
	import { darkMode } from '$lib/store';

	function toggleDarkMode() {
		if ($darkMode === false) {
			return ($darkMode = false);
		}

		return ($darkMode = true);
	}
</script>

<div class="theme-toggle">
	<input
		type="checkbox"
		id="theme-toggle"
		class="theme-toggle__checkbox"
		aria-label="Turn dark theme on and off"
		bind:checked={$darkMode}
		onchange={toggleDarkMode}
	/>
	<label class="theme-toggle__label" for="theme-toggle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="moon-svg">
			<path
				class="moon-svg__path"
				d="M13.719 1.8A8.759 8.759 0 111.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"
			/>
		</svg>
	</label>
</div>

<style>
	@import '$lib/css/_movement.css';

	.theme-toggle {
		display: block;
		position: absolute;
		top: 1.25rem;
		right: 3.125rem;
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
		fill: #fff;
		stroke: var(--font-color);
		transition:
			fill 0.3s ease,
			stroke 0.3s ease;
	}

	.theme-toggle__checkbox {
		position: absolute;
		top: auto;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		width: 0.0625rem;
		height: 0.0625rem;
		white-space: nowrap;
	}

	.theme-toggle__checkbox:checked + .theme-toggle__label .moon-svg__path {
		fill: var(--primary-button-color);
		stroke: none;
	}
</style>
