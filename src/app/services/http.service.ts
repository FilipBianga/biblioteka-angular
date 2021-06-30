import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {Users} from "../models/users";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books');
  }

  getBook(id: string | null): Observable<Book> {
    return this.httpClient.get<Book>('http://localhost:3000/books/' + id);
  }

  getUsers(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/users');
  }
  getUser(id: string | null): Observable<Users> {
    return this.httpClient.get<Users>('http://localhost:3000/users');
  }


}
