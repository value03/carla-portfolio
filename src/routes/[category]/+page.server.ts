import { getResource } from '$lib';
import type { PageServerLoad } from './$types';

/**  */
export const load: PageServerLoad = async ({ params }) => {
	getResource('/api/projects').then((response) => {
		console.log(response);
		return { projects: response, route: params.category };
	});
};
