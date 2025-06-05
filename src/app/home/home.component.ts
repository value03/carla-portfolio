import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { WorkCardComponent } from "../work-card/work-card.component";
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { WorksTableComponent } from "../works-table/works-table.component";
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from "@angular/cdk/layout";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  imports: [
    RouterLink,
    RouterOutlet,
    WorkCardComponent,
    MenuBarComponent,
    CommonModule,
    WorksTableComponent,
    LayoutModule,
  ],
})
export class HomeComponent implements OnInit {
  project: string | null = "";
  project_activated: boolean = false;

  handheldPortrait: boolean = false;

  backdrop: string =
    "https://diplomatic-cats-baa3b29b9f.media.strapiapp.com/12981448_3840_2160_50fps_2f5b46b66f.mp4";

  constructor(
    private route: ActivatedRoute,
    private responsive: BreakpointObserver,
  ) {}

  ngOnInit() {
    // Access route parameter
    //this.project = this.route.snapshot.paramMap.get("project");
    this.route.params.subscribe((params) => {
      this.project = params["project"];
      if (this.project == "3d") {
        this.project = "D3";
      }
    });
    this.project_activated = this.project != null; // && this.project.length !== 0;
    console.log(this.project_activated);

    //access layout BreakpointObserver
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.handheldPortrait = result.matches;
      if (result.matches) {
        console.log("handsetPortrait");
      }
    });
  }
}
