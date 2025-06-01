import { Routes } from "@angular/router";
import { PosterComponent } from "./poster/poster.component";
import { HomeComponent } from "./home/home.component";
import { PostersComponent } from "./posters/posters.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", title: "App Home Page", component: HomeComponent },
  { path: "poster", title: "App Poster Page", component: PosterComponent },
  { path: "posters", title: "Posters", component: PostersComponent },
  { path: "home/:project", component: HomeComponent },
];
