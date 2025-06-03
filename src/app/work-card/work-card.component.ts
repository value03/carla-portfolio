import { Component, Input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-work-card",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./work-card.component.html",
  styleUrl: "./work-card.component.scss",
})
export class WorkCardComponent {
  @Input() category = "";
  @Input() titleImage = "";
  @Input() title = "";
  @Input() description = "";
  @Input() year = "";
  @Input() material = "";
  @Input() size = "";

  link: string = "/".concat(this.category.concat("/", this.title));
}
