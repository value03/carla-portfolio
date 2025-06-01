import { Component } from "@angular/core";
import { RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "carla-portfolio";
}
