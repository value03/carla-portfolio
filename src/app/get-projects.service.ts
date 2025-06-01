import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetProjectsService {
  private projectsUrl = "assets/projects.json";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    console.log(JSON.parse);
    return this.http.get(this.projectsUrl);
  }
}
