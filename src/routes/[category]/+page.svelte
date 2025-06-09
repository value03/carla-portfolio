<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.post.route}</h1>
{#await data.post.projects}
	<h1>loading...</h1>
{:then}
	<h1>{data.post.projects}</h1>
{/await}
