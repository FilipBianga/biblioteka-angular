import {Component, OnInit} from '@angular/core';
import {Users} from "../../models/users";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AddService} from "../../services/add.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users!: Users[];

  constructor(private http: HttpClient, private route: ActivatedRoute, private https: HttpService,private add: AddService) {}

  ngOnInit() {
    // @ts-ignore
    this.http.get('http://localhost:3000/users').subscribe((result: Users[]) =>{
      this.users = result;
    });
  }

}
