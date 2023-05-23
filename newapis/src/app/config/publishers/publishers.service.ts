import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments.ts/environments';
import { Publishers } from './publishers';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {
  private url=environment.api_url
  static create(data: any) {
  }
    

    constructor(private http: HttpClient) { }
    getAll(): Observable<Publishers[]> {
      return this.http.get<Publishers[]>(`${this.url + "publishers/"}`);
    }
  
    getById(id: any): Observable<Publishers> {
      return this.http.get<Publishers>(`${this.url + "publishers"}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(this.url + "publishers/", data);
    }
  }
  

  

