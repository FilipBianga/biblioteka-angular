import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../models/book';
import { catchError, tap } from 'rxjs/operators';
import {Users} from "../models/users";

@Injectable({
  providedIn: 'root',
})
export class HttpBooksService {
  private url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  // Dodatkowe konfiguracje w zapytaniu
   getMovies(): Observable<HttpResponse<Book[]>> {
    return this.http
       .get<HttpResponse<Book[]>>(this.url, { observe: 'response' })
      .pipe(tap(console.log));
   }

  postBook(movie: Book): Observable<Book> {
    return this.http.post<Book>(this.url, movie).pipe(tap(console.log));
  }


}
