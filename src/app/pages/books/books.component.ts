import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../models/book";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books!: Observable<Book[]>;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.books = this.http.getBooks();
  }


}
