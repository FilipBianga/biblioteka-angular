import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../../models/book";
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import {AddService} from "../../../services/add.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails!: Observable<Book>;
  showMe:boolean=false;
  value: number = Date.now();

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private add: AddService
  ) {}

  ngOnInit() {
    this.bookDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getBook(params.get('id')))
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
