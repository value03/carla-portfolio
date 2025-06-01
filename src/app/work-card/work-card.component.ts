import { Component, Input } from "@angular/core";

@Component({
  selector: "app-work-card",
  standalone: true,
  imports: [],
  templateUrl: "./work-card.component.html",
  styleUrl: "./work-card.component.scss",
})
export class WorkCardComponent {
  @Input() titleImage = "";
  @Input() title = "";
  @Input() description = "";
  @Input() year = "";
}
