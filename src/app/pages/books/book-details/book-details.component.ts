import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../../models/book";
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import {AddService} from "../../../services/add.service";
import { BorrowBookService } from 'src/app/services/borrow-book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails!: Observable<Book>;
  showMe:boolean=false;
  value: number = Date.now();
  isBorrowed: boolean = true;


  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private add: AddService,
    private borrowBookService: BorrowBookService,
  ) {}

  ngOnInit() {
    this.bookDetails = this.route.paramMap.pipe(
      switchMap(async (params: ParamMap) => {
        const bookID = params.get('id');
        this.isBorrowed = await this.borrowBookService.isBorrowed(bookID)
        return await this.http.getBook(bookID).toPromise();
      })
        
    );
    
  }

  goToBooks() {
    this.location.back();
  }

  addToUser(book: Book){
    this.add.addToList(book);
  }

  toogleTag(){
    this.showMe = !this.showMe;
  }

}
