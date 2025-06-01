import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetProjectsService {
  private projectsUrl = "http://localhost:1337/api/projects/?populate=*";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(this.projectsUrl);
  }
}
