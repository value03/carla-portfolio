<script lang="ts">
	import { project } from '$lib';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{await data.projects}</h1>
