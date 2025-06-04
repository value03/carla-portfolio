import { Component, Input, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { project } from "../works-table/works-table.component";
import { error } from "console";
import { title } from "process";

@Component({
  selector: "app-work-card",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./work-card.component.html",
  styleUrl: "./work-card.component.scss",
})
export class WorkCardComponent implements OnInit {
  @Input() project: project = {
    title: "hi",
    description: "hahah",
    LandingPageImage: { url: "haha" },
    category: "balls",
  };

  titleImageUrl: string = "";
  link: string = "";

  ngOnInit(): void {
    this.titleImageUrl = "http://localhost:1337".concat(
      this.project.LandingPageImage.url,
    );

    this.link = "/".concat(
      this.project.category.concat("/", this.project.title),
    );
  }
}
