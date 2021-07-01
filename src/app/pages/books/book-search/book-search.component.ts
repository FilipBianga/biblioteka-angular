import {Component, Injectable, OnInit} from '@angular/core';
import {Users} from "../../../models/users";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../../models/book";


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: [ './book-search.component.css' ]
})

export class BookSearchComponent implements OnInit{
  title = 'Search our resources';
  searchText!: string;
  books!: Book[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // @ts-ignore
    this.http.get('http://localhost:3000/books').subscribe((result: Users[]) =>{
      // @ts-ignore
      this.books = result;
    });
  }
}
