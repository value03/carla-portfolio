import { Component } from "@angular/core";
import { WorkTitleComponent } from "../work-title/work-title.component";

@Component({
  selector: "app-poster",
  standalone: true,
  templateUrl: "poster.component.html",
  imports: [WorkTitleComponent],
})
export class PosterComponent {
  title = "work-poster";
  description =
    "blablablablablablablablablablablablablablabal \n blablbalbalablablablabla \n balblablablablabalblablablalblablalblablalblabllablalblablabbalblalbalblablalblablabllablablalblablabballbalblbalballbalbalbalbal";
  info = "infoinfoinfo";
  range = "range 1-3";
}
