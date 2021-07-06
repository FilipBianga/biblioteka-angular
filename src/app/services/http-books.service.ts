import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HttpBooksService {
  private url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  postBook(movie: Book): Observable<Book> {
    return this.http.post<Book>(this.url, movie).pipe(tap(console.log));
  }

}
