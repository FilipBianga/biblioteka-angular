import { Component, OnInit } from '@angular/core';
import {Users} from "../../../models/users";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  users!: Users[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
  }

}
