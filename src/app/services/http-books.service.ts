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

@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(tap(console.log));
  }

  // Dodatkowe konfiguracje w zapytaniu
  // getMovies(): Observable<HttpResponse<Movie[]>> {
  //   return this.http
  //     .get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
  //     .pipe(tap(console.log));
  // }

  postMovie(movie: Book): Observable<Book> {
    return this.http.post<Book>(this.url, movie).pipe(tap(console.log));
  }


}
