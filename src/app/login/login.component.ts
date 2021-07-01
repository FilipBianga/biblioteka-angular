import {Component, OnInit} from '@angular/core';
import {Users} from "../models/users";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  users!: Users[];
  username!: string;
  password!: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
  }

  LoginUser() {
    if(this.username && this.password == "root123"){
      console.log('Elo');
    }
  }

}
