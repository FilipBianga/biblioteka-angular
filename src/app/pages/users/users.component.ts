import {Component, OnInit} from '@angular/core';
import {Users} from "../../models/users";
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

}
