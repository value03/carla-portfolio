import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetProjectsService {
  private projectsUrl = "https://vps.nimbus3k.ch/strapi";

  constructor(private http: HttpClient) {}

  getProjects(resource: string): Observable<any> {
    return this.http.get<any>(this.projectsUrl.concat(resource));
  }
}
