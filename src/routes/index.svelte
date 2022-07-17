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
