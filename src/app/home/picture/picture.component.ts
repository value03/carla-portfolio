import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-picture",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./picture.component.html",
  styleUrl: "./picture.component.scss",
})
export class PictureComponent {
  @Input() link = "";
  @Input() image = "";
}
