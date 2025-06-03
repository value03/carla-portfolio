import { Component, Input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { project } from "../works-table/works-table.component";

@Component({
  selector: "app-work-card",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./work-card.component.html",
  styleUrl: "./work-card.component.scss",
})
export class WorkCardComponent {
  @Input() project: project = {
    title: "hi",
    category: "hello",
    LandingPageImage: { url: "nono" },
  };

  titleImageUrl: string = "http://185.143.101.10:1337".concat(
    this.project.LandingPageImage.url,
  );

  link: string = "/".concat(
    this.project.category.concat("/", this.project.title),
  );
}
