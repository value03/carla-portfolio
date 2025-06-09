import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params, fetch }) => {
	return {
		projects: fetch('/api/projects/')
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				return response;
			}),
		route: params.category
	};
};
