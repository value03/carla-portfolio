import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostersComponent } from "./posters/posters.component";
import { ProjectPageComponent } from "./project-page/project-page.component";

export const routes: Routes = [
  { path: "", title: "App Home Page", component: HomeComponent },
  { path: ":project", component: HomeComponent },
  { path: ":category/:project", component: ProjectPageComponent },
];
