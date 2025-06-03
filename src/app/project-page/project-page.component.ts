import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";
import { GetProjectsService } from "../get-projects.service";

@Component({
  selector: "app-project-page",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./project-page.component.html",
  styleUrl: "./project-page.component.scss",
})
export class ProjectPageComponent implements OnInit {
  category: string | null = "";
  project: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private projectService: GetProjectsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      this.project = params["project"];
      console.log(this.category, this.project);
    });

    this.projectService.getProjects("projects");
  }
}
