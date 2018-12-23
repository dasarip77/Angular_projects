import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Credentials } from '../models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_login: Credentials = {
    email: '',
    password: ''
};

  constructor(private login: LoginserviceService) { }

  ngOnInit() {
    this.logUser();
  }

  logUser() {
    this.login.loginuser(this.user_login).subscribe(
      data => {this.user_login = data;
      console.log('login', data)},
      err => console.error(err),
      () => console.log('login successful')
    );
  }
}
