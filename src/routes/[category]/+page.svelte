<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.route}</h1>
{#await data.projects}
	<h1>loading...</h1>
{:then projects}
	<h1>{projects}</h1>
{/await}
