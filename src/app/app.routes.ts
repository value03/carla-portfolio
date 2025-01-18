import { Routes } from "@angular/router";
import { PosterComponent } from "./poster/poster.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", title: "App Home Page", component: HomeComponent },
  { path: "poster", title: "App Poster Page", component: PosterComponent },
];
