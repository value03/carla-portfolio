import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TestComponent } from "./test/test.component";
import { WorkTitleComponent } from "./work-title/work-title.component";

export const routes: Routes = [
  { path: "", title: "App Home Page", component: HomeComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "test", component: WorkTitleComponent },
  { path: ":project", component: HomeComponent },
  { path: ":category/:project", component: ProjectPageComponent },
];
