import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseUrl: string = environment.api;
  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    const URL = this.baseUrl + "login";
    const headers = new HttpHeaders().set("Accept", "application/json");
    const body = { user, password };

    return this.http.post(URL, body, { headers });
  }
}
