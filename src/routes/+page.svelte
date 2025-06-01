<script lang="ts">
</script>

<svelte:head>
	<title>Holden Greene | Full Stack Developer</title>
</svelte:head>

<div class="colored-background">
	<div class="main-grid">
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

<style>
	.colored-background {
		display: flex;
		justify-content: center;
		background-color: var(--splash-background);
		min-height: 100vh;
		min-height: 100dvh;
		transition: 0.3s background ease;
	}

	.main-grid {
		position: relative;
		width: 100%;
		background-color: var(--primary-background);
		text-align: center;
		margin: 1.25rem;
		border-radius: 0.1875rem;
		box-shadow: var(--slight-shadow);
		transition: 0.3s background ease;
	}

	.main-grid__text {
		display: grid;
		place-content: center;
		height: 100%;
	}

	.main-grid__titles {
		font-family: var(--header-font);

		h1 {
			margin: 0;
			font-weight: bold;
			font-size: clamp(2.375rem, 5vw, 2.625rem);
			transition:
				opacity 1s 0.25s ease,
				transform 1s 0.25s ease;
		}

		h2 {
			font-weight: normal;
			transition:
				opacity 1s 0.5s ease,
				transform 1s 0.5s ease;
		}
	}

	.main-grid__link-section {
		display: flex;
		justify-content: center;
		transition:
			opacity 1s 0.75s ease,
			transform 1s 0.75s ease;
	}

	.main-grid__link {
		display: block;
		background-color: transparent;
		border: 0.1875rem solid var(--primary-button-color);
		padding: 0.625rem;
		border-radius: 0.1875rem;
		color: var(--font-color);
		font-size: 1.25rem;
		text-decoration: none;
		transition:
			border-color 0.25s ease,
			background-color 0.25s ease;

		&:hover {
			border-color: hsl(from var(--primary-button-color) h s calc(l - 20));
			background-color: var(--primary-hover);
		}
	}

	@starting-style {
		.main-grid__titles :is(h1, h2),
		.main-grid__link-section {
			opacity: 0;
			transform: translateY(25%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.main-grid__titles h1,
		.main-grid__titles h2,
		.main-grid__link-section {
			transition: none;
		}
	}

	@media (max-width: 1023px) {
		.main-grid {
			padding: 1rem;
		}
	}
</style>
