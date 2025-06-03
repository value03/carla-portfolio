import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { WorkCardComponent } from "../work-card/work-card.component";
import { GetProjectsService } from "../get-projects.service";
import { CommonModule } from "@angular/common";
import { Interface } from "node:readline/promises";
import { HttpClientModule } from "@angular/common/http";

interface project {
  category: string;
  titleImage: string;
  title: string;
  description: string;
  year: string;
}

@Component({
  selector: "app-works-table",
  standalone: true,
  imports: [WorkCardComponent, CommonModule, HttpClientModule],
  templateUrl: "./works-table.component.html",
  styleUrl: "./works-table.component.scss",
  providers: [GetProjectsService],
})
export class WorksTableComponent implements OnInit {
  @Input() category = "";
  @HostBinding("style.--rows") @Input() rows = 1;
  @HostBinding("style.--cols") @Input() cols = 2;

  projects: any[] = [];

  constructor(private projectService: GetProjectsService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects("/api/projects/?populate=*")
      .subscribe((response) => {
        this.projects = response.data;
        console.log("Projects/n/n", this.projects);
      });
  }
}
