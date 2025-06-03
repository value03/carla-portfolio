import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";
import { GetProjectsService } from "../get-projects.service";
import { project } from "../works-table/works-table.component";

@Component({
  selector: "app-project-page",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./project-page.component.html",
  styleUrl: "./project-page.component.scss",
  providers: [GetProjectsService],
})
export class ProjectPageComponent implements OnInit {
  category: string | null = "";
  projectName: string | null = "";
  project: project | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: GetProjectsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      this.projectName = params["project"];
      console.log(this.category, this.projectName);
    });

    this.projectService.getProjects("projects").subscribe((response) => {
      this.project = response.filter(
        (p: project) => p.title == this.projectName,
      );
      console.log(this.project);
    });
  }
}
