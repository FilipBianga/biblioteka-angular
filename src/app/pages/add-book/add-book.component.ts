import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import {Book} from "../../models/book";
import {HttpBooksService} from "../../services/http-books.service";


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  model: Partial<Book> = {};

  constructor(private http: HttpService, private httpBooksService: HttpBooksService) {}

  ngOnInit(): void {
  }

  send() {
    console.log(this.model);
    this.httpBooksService.postBook(this.model as Book).subscribe(
        result => console.log(result),
        error => console.error(error)
    )
  }

}
