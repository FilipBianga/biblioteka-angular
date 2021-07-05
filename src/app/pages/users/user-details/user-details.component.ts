import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../../services/http.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";
import {Users} from "../../../models/users";
import { BorrowBookService } from 'src/app/services/borrow-book.service';
import { Borrow } from 'src/app/models/borrow';
import { Book } from 'src/app/models/book';
import { BorrowedBook } from 'src/app/models/borrowed-book';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails!: Observable<Users>;
  borrowBooks: BorrowedBook[] = [];
  constructor(
      private http: HttpService,
      private route: ActivatedRoute,
      private location: Location,
      private borrowBookService: BorrowBookService,
  ) {
  }

  ngOnInit() {
    this.userDetails = this.route.paramMap.pipe(
        switchMap(async (params: ParamMap) => {
          this.borrowBooks = await this.borrowBookService.getBorrowBooks(params.get('id'));
          console.log(this.borrowBooks);
          return await this.http.getUser(params.get('id')).toPromise();
        })
        );
        
      }
  giveBackBook(borrowedID: string) {
    this.borrowBookService.deleteBorrow(borrowedID).subscribe(
      (responseFromServer) => {
        console.log('borrow deleted');
        this.borrowBooks = this.borrowBooks.filter(borrowBook => borrowBook.borrowID !== borrowedID);
    
    })
  }

  goToBooks() {
    this.location.back();
  }
}
