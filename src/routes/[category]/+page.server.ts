import { getResource } from '$lib';
import type { PageServerData } from './$types';

export const load: PageServerData = async () => {
	return {
		projects: getResource('/api/projects')
	};
};
