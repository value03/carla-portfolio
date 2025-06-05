import { Component, OnInit } from "@angular/core";
import { GetProjectsService } from "../get-projects.service";
import { HttpClientModule } from "@angular/common/http";
import { strapiUrl } from "../app.component";

@Component({
  selector: "app-about-me",
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: "./about-me.component.html",
  styleUrl: "./about-me.component.scss",
  providers: [GetProjectsService],
})
export class AboutMeComponent implements OnInit {
  content: { text: string; backdrop: { url: string } } = {
    text: "hello",
    backdrop: { url: "hi" },
  };
  backdropUrl: string = "";

  constructor(private getProjects: GetProjectsService) {}

  ngOnInit(): void {
    this.getProjects
      .getProjects("/api/about-me/?populate=*")
      .subscribe((response) => {
        console.log(response);
        this.content = response.data;
        this.backdropUrl = strapiUrl.concat(this.content.backdrop.url);
      });
  }
}
