import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments.ts/environments';
import { Authors } from './authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private url=environment.api_url
  static create(data: any) {
  }
    

    constructor(private http: HttpClient) { }
    getAll(): Observable<Authors[]> {
      return this.http.get<Authors[]>(`${this.url + "authors/"}`);
    }
  
    getById(id: any): Observable<Authors> {
      return this.http.get<Authors>(`${this.url + "authors"}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(this.url + "authors/", data);
    }
  }