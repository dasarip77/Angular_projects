import { Component, OnInit } from '@angular/core';
import { RestExService } from '../rest-ex.service';
import { User } from '../models/user';

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.css']
})
export class RestCallComponent implements OnInit {

   users: User[] = [];
   user: User = {
     id: 0,
     name:"",
     job:""
   };
  constructor(private restexservice: RestExService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.restexservice.getusers().subscribe(
      data => {
        this.users = data.data;
        console.log('test', data)
      },
      err => console.error(err),
      () => console.log('done showing users')
    );
  }

  postUser(user) {
  //   const user = {
  //     "name": "morpheus",
  //     "job": "leader"
  // };
    this.restexservice.postUsers(this.user).subscribe(
      data => {
        console.log('test', data)
        // Redirect to the home page
      },
      err => console.error(err),
      () => console.log('done showing users')
    );
  }

  putUser(user) {
    this.restexservice.putUsers(this.user).subscribe(
      data => {console.log('test', data)},
      err => console.error(err),
      () => console.log('Updated users')
      );
  }
}
