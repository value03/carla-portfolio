import type { PageServerData } from './$types';

export const load: PageServerData = async () => {
	fetch('https://vps.nimbus3k.ch/strapi/api/projects')
		.then((response) => response.json())
		.then((response) => {
			return { project: response };
		});
};
