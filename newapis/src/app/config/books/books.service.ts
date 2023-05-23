import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Books } from './books';
import { environment } from 'src/environments.ts/environments';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url=environment.api_url
  static create(data: any) {
    
  }

  constructor(private http: HttpClient) { }
  getAll(): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.url + "books/"}`);
  }

  getById(id: any): Observable<Books> {
    return this.http.get<Books>(`${this.url + "books"}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url + "books/", data);
  }
}
