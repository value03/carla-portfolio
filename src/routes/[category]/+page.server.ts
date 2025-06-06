import { getResource } from '$lib';
import type { PageServerData } from './$types';

export const load: PageServerData = async () => {
	getResource('/api/projects').then((response) => {
		return response;
	});
};
