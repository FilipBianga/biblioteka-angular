import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../../models/users";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {BookDetailsComponent} from "../books/book-details/book-details.component";
import {Book} from "../../models/book";
import {switchMap} from "rxjs/operators";
import {AddService} from "../../services/add.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() bookDetails!: Observable<Book>;
  users!: Users[];

  constructor(private http: HttpClient, private route: ActivatedRoute, private https: HttpService,private add: AddService) {}

  ngOnInit() {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
    this.bookDetails = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.https.getBook(params.get('id')))
    );
  }
  addToUser(book: Book){
    this.add.addToList(book);
  }
}
