import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Book} from "../models/book";
import {Users} from "../models/users";
import {tap, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books');
  }

  getBook(id: string | null): Observable<Book> {
    return this.httpClient.get<Book>('http://localhost:3000/books/' + id);
  }

  getUser(id: string | null): Observable<Users> {
    return this.httpClient.get<Users>('http://localhost:3000/users/' + id);
  }

  getUsername(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/users')
  }

}
