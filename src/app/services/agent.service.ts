import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class AgentService {
  baseUrl: string = environment.api;
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    const URL = this.baseUrl + "agent";
    const headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.get(URL, { headers: headers });
  }

  create(agente: any): Observable<any> {
    const URL = this.baseUrl + "agent";
    const headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.post(URL, agente, { headers });
  }

  delete(id): Observable<any> {
    const URL = this.baseUrl + "agente/delete";
    const headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.post(URL, id, { headers });
  }
}
