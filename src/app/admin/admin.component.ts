import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  runners;
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
      .then(() => this.service.findAllRunners())
      .then((runners) => this.runners = runners);
  }

  nav(runId) {
    this.router.navigate(['/runner/' + runId]);
    console.log(runId);
  }

  ngOnInit() {
    this.service.findAllRunners()
      .then((response) => this.runners = response);
  }

}
