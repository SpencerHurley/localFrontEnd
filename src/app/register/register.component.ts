import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  type = '';
  register(username, password, password2) {
    if (password !== password2) {
      window.alert("Passwords do not match.")
      return;
    } else {
      console.log(this.type);
    }

    this.service
      .createUser(username, password)
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
  }

}
