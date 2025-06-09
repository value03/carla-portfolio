import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params, fetch }) => {
	return {
		route: params.category,
		projects: fetch('http://localhost:1337/api/projects/')
			.then((response) => response.json())
			.then((response) => response)
	};
};
