// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http"; // Import HttpClientModule

import { AppComponent } from "./app.component";
import { GetProjectsService } from "./get-projects.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [GetProjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
