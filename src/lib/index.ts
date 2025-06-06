// place files you want to import through the `$lib` alias in this folder.
export class image {
	url: string;
	constructor() {
		this.url = 'none';
	}
}

export class project {
	documentId?: string;
	category: string;
	LandingPageImage: image;
	title: string;
	description?: string;
	year?: string;
	size?: string;
	materials?: string;
	backdrops: [image];
	ImagesProjectPage: [image];

	constructor() {
		this.category = 'hi';
		this.LandingPageImage = new image();
		this.title = 'title';
		this.backdrops = [new image()];
		this.ImagesProjectPage = [new image()];
	}
}

const base_url = 'https://vps.nimbus3k.ch/strapi';

export async function getResource(resource: string): Promise<Response> {
	return fetch(base_url.concat(resource))
		.then((promise) => promise.json())
		.then((promise) => {
			console.log(promise);
			return promise;
		});
}
