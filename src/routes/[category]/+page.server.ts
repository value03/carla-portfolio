import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params, fetch }) => {
	return {
		projects: fetch('http://localhost:1337/api/projects/')
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				return response;
			}),
		route: params.category
	};
};
