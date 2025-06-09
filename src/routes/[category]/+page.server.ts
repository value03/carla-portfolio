import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params, fetch }) => {
	const res = await fetch('http://localhost:1337/api/projects/');

	return {
		route: params.category,
		projects: await res.json()
	};
};
