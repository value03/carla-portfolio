import { Component, Input, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { project, strapiUrl } from "../app.component";

@Component({
  selector: "app-work-card",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./work-card.component.html",
  styleUrl: "./work-card.component.scss",
})
export class WorkCardComponent implements OnInit {
  @Input() project: project = new project();

  titleImageUrl: string = "";
  link: string = "";

  ngOnInit(): void {
    if (this.project != null) {
      this.titleImageUrl = strapiUrl.concat(this.project.LandingPageImage.url);

      this.link = "/".concat(
        this.project.category.concat("/", this.project.title),
      );
    }
  }
}
