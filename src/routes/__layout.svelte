<script lang="ts">
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
</script>

<ThemeWrapper>
	<slot />
</ThemeWrapper>

<style lang="scss" global>
	@use '../../node_modules/normalize.css/normalize';
</style>
