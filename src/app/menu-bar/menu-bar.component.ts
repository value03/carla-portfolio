import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-menu-bar",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./menu-bar.component.html",
  styleUrl: "./menu-bar.component.scss",
})
export class MenuBarComponent {}
