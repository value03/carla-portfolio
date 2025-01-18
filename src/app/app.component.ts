import { Component } from "@angular/core";
import { RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "carla-portfolio";
}
