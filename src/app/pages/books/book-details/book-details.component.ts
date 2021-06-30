import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../../models/book";
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails!: Observable<Book>;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.bookDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getBook(params.get('id')))
    );
  }

  goToBooks() {
    // this.router.navigate(['/movies']);
    this.location.back();
  }
}
