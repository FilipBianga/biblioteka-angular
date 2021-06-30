import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../models/book";

@Component({
  selector: 'app-book-layout',
  templateUrl: './book-layout.component.html',
  styleUrls: ['./book-layout.component.css']
})

export class BookLayoutComponent {
  @Input() book!: Book;
}
