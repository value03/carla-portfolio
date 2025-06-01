import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { WorkCardComponent } from "../work-card/work-card.component";
import { GetProjectsService } from "../get-projects.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Interface } from "node:readline/promises";

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
  imports: [WorkCardComponent, CommonModule],
  templateUrl: "./works-table.component.html",
  styleUrl: "./works-table.component.scss",
})
export class WorksTableComponent implements OnInit {
  @Input() category = "";
  @HostBinding("style.--rows") @Input() rows = 1;
  @HostBinding("style.--cols") @Input() cols = 2;

  projects: project[] = require("../../assets/projects.json");

  constructor() {}

  ngOnInit(): void {
    this.projects = require("../../assets/projects.json");
    console.log(this.projects[0]);
  }
}
