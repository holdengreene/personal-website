<script lang="ts">
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import 'modern-normalize/modern-normalize.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ThemeWrapper>
	{@render children?.()}
</ThemeWrapper>
