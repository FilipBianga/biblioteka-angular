import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../../models/users";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users!: Users[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
  }

  // goToBooks() {
  //   // this.router.navigate(['/movies']);
  //   this.location.back();
  // }
}
