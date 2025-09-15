import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiurl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiurl);
  }
}
