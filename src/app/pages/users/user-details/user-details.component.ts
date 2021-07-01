import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../../models/book";
import {HttpService} from "../../../services/http.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";
import {Users} from "../../../models/users";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails!: Observable<Users>;

  constructor(
      private http: HttpService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
  ) {
  }

  ngOnInit() {
    this.userDetails = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.http.getUser(params.get('id')))
    );
  }

  goToBooks() {
    this.location.back();
  }
}
