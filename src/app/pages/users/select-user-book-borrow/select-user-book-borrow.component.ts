import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Borrow } from 'src/app/models/borrow';
import { BorrowBookService } from 'src/app/services/borrow-book.service';
import {Users} from "../../../models/users";


@Component({
  selector: 'app-select-user-book-borrow',
  templateUrl: './select-user-book-borrow.component.html',
  styleUrls: ['./select-user-book-borrow.component.css']
})
export class SelectUserBookBorrowComponent implements OnInit {
  @Input() book!: Book;
  @Output() bookSuccessfullyBorrowed : EventEmitter<any> = new EventEmitter();

  users!: Users[];
  chosenUserId: string | undefined = '';
  showMe = false;
  value: string = Date().toString();
  model: Partial<Borrow> = {};
  


  constructor(private http: HttpClient,
    private borrowService: BorrowBookService) {
  }

  

  ngOnInit(): void {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
  }

  classChange(){
    
  }
  chooseUser(user: Users) {
    this.chosenUserId = user.id;
    console.log('Poszlo');
  }

  toogleTag(){
    this.showMe = !this.showMe;
  }
//interface Borrow {
 // userID: string;
 // bookID: string;
 // date: string;
//}
  send() {
    console.log(this.model);
    const x: Borrow = {userID: this.chosenUserId, bookID: this.book.id , date: this.value};
    this.borrowService.postBorrow(x).subscribe(
        result => this.bookSuccessfullyBorrowed.emit(),
        error => console.error(error)
    )
  }


}
