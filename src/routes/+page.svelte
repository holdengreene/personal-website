<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<svelte:head>
	<title>Holden Greene | Full Stack Developer</title>
</svelte:head>

<div class="colored-background">
	<div class="main-grid">
		<ThemeToggle />

		<main class="main-grid__text">
			<div class="main-grid__titles">
				<h1>Holden Greene</h1>
				<h2>Full Stack Developer in SLC, Utah</h2>
			</div>

			<div class="main-grid__link-section">
				<a
					class="main-grid__link main-grid__link--github"
					href="https://github.com/holdengreene/">Github</a
				>
			</div>
		</main>
	</div>
</div>

<style lang="scss">
	@use '../scss/variables';
	@use '../scss/movement';
	@use 'sass:color';

	.colored-background {
		background-color: var(--splash-background);
		min-height: 100vh;
		display: flex;
		justify-content: center;
	}

	.main-grid {
		position: relative;
		width: 100%;
		background-color: var(--primary-background);
		text-align: center;
		margin: variables.rem(20px);
		border-radius: variables.rem(3px);
		box-shadow: variables.$slight-shadow;
	}

	.main-grid__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	.main-grid__titles {
		font-family: variables.$header-font;

		h1 {
			opacity: 0;
			margin: 0;
			font-weight: bold;
			font-size: variables.rem(42px);
			animation: 1s fadeUp 0.25s forwards ease;
		}

		h2 {
			opacity: 0;
			font-weight: normal;
			animation: 1s fadeUp 0.5s forwards ease;
		}
	}

	.main-grid__link-section {
		display: flex;
		justify-content: center;
		opacity: 0;
		animation: 1s fadeUp 0.75s forwards ease;
	}

	.main-grid__link {
		display: block;
		background-color: transparent;
		border: variables.rem(3px) solid variables.$splash-background;
		padding: variables.rem(10px);
		border-radius: variables.rem(3px);
		color: var(--font-color);
		font-size: variables.rem(20px);
		text-decoration: none;
		transition: border-color 0.25s ease, background-color 0.25s ease;

		&:hover {
			border-color: color.scale(variables.$splash-background, $lightness: -20%);
			background-color: var(--green-hover);
		}
	}

	// Let's be considerate
	@media (prefers-reduced-motion: reduce) {
		.main-grid__titles h1,
		.main-grid__titles h2,
		.main-grid__link-section {
			opacity: 1;
			animation: none;
		}
	}

	@media (max-width: 1023px) {
		.main-grid {
			padding: variables.rem(15px);
		}

		.main-grid__titles h1 {
			font-size: variables.rem(38px);
		}
	}
</style>
