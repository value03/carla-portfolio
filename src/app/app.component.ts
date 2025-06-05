import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterLink } from "@angular/router";

const strapiUrl: string = "https://vps.nimbus3k.ch/strapi";

//const strapiUrl: string = "../../assets";
export { strapiUrl };

export class image {
  url: string;
  constructor() {
    this.url = "none";
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
    this.category = "hi";
    this.LandingPageImage = new image();
    this.title = "title";
    this.backdrops = [new image()];
    this.ImagesProjectPage = [new image()];
  }
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "carla-portfolio";
}
