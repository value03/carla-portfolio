import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params, fetch }) => {
	return {
		projects: await fetch('/api/projects')
			.then((response) => response.json())
			.then((response) => response),
		route: params.category
	};
};
