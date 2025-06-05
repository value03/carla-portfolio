import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";
import { GetProjectsService } from "../get-projects.service";
import { HttpClientModule } from "@angular/common/http";
import { project, strapiUrl } from "../app.component";
import { CommonModule } from "@angular/common";
import { WorkTitleComponent } from "../work-title/work-title.component";
import { ProjectNavComponent } from "../project-nav/project-nav.component";

@Component({
  selector: "app-project-page",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    WorkTitleComponent,
    ProjectNavComponent,
  ],
  templateUrl: "./project-page.component.html",
  styleUrl: "./project-page.component.scss",
  providers: [GetProjectsService],
})
export class ProjectPageComponent implements OnInit {
  category: string | null = "";
  projectName: string | null = "";
  project: project | null = null;
  p: project = new project();

  backdrops: string[] = [];
  projectImages: string[] = [];

  getImages(index: number, len: number): number[] {
    let indices = [];
    for (let i = index; i < len; i++) {
      indices[i - index] = i;
    }
    return indices;
  }

  constructor(
    private route: ActivatedRoute,
    private projectService: GetProjectsService,
  ) {}

  ngOnInit(): void {
    //get path (id in particular)
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      this.projectName = params["project"];
      console.log(this.category, this.projectName);
    });
    if (this.projectName == null) {
      this.projectName = "";
    }
    //get project to show
    this.projectService
      .getProjects("/api/projects/".concat(this.projectName, "/?populate=*"))
      .subscribe((response) => {
        this.project = response.data;
        console.log(this.project);

        if (this.project != null) {
          this.p = this.project;
          console.log(this.p.size);
          this.backdrops = this.project.backdrops.map((elem) =>
            strapiUrl.concat(elem.url),
          );
          console.log(this.backdrops);

          this.projectImages = this.project.ImagesProjectPage.map((elem) =>
            strapiUrl.concat(elem.url),
          );
          console.log(this.projectImages);
        }
      });
  }
}
