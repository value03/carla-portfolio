<script lang="ts">
	import type { PageProps } from './$types';
	import Home from './Home.svelte';

	let { data }: PageProps = $props();
</script>

<main>
	<Home />
</main>
