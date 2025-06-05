import { Component, Input, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { RouterLink, RouterOutlet } from "@angular/router";
import { project } from "../app.component";

@Component({
  selector: "app-work-title",
  standalone: true,
  imports: [MatDividerModule, RouterLink, RouterOutlet],
  templateUrl: "./work-title.component.html",
  styleUrl: "./work-title.component.scss",
})
export class WorkTitleComponent implements OnInit {
  @Input() project: project = new project();

  constructor() {}

  ngOnInit(): void {
    console.log("hello");
    console.log(this.project.size);
    let elem = document.getElementById("1");
    console.log(elem);
  }
}
