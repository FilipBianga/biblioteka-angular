import { Component, OnInit } from '@angular/core';
import {AddService} from "../../../services/add.service";

@Component({
  selector: 'app-book-borrow',
  templateUrl: './book-borrow.component.html',
  styleUrls: ['./book-borrow.component.css']
})
export class BookBorrowComponent implements OnInit {

  books = this.add.getList();

  constructor(private add: AddService) { }

  ngOnInit(): void {
  }

}
