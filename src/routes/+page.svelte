<script lang="ts">
	import Home from './Home.svelte';
	import { onMount } from 'svelte';
	let data: Response | null = null;
	onMount(async () => {
		data = await fetch('https://vps.nimbus3k.ch/strapi/api/projects').then((response) =>
			response.json()
		);
	});
	console.log(data);
</script>

<main>
	<Home />
</main>
