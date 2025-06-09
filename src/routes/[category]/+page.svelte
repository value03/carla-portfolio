<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.route}</h1>
{#await data.projects}
	<h1>loading...</h1>
{:then}
	<h1>loaded yay</h1>
{:catch error}
	<h1>{error}</h1>
{/await}
