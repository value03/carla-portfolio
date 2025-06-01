import { Component, Input } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-work-title",
  standalone: true,
  imports: [MatDividerModule, RouterLink, RouterOutlet],
  templateUrl: "./work-title.component.html",
  styleUrl: "./work-title.component.scss",
})
export class WorkTitleComponent {
  @Input() title = "";
  @Input() description = "";
  @Input() info = "";
  @Input() dateRange = "";
}
