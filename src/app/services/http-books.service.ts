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
  private url2 = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Book[]> {
    return this.http.get<Users[]>(this.url).pipe(tap(console.log));
  }

  // Dodatkowe konfiguracje w zapytaniu
  // getMovies(): Observable<HttpResponse<Movie[]>> {
  //   return this.http
  //     .get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
  //     .pipe(tap(console.log));
  // }

  postBook(movie: Book): Observable<Book> {
    return this.http.post<Book>(this.url, movie).pipe(tap(console.log));
  }


}
