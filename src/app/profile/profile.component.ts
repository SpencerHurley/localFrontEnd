import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  user;
  sections = [];
  isAdmin = false;
  showSections = false;

  update() {
    console.log("Updating");
    this.service.updateUser(this.user)
      .then(() => {});
  }


  ngOnInit() {
    this.service
      .profile()
      .then((user) => user.json())
      .then(user => this.user = user)
      .then((user) => this.isAdmin = (user.username === 'admin'))
      .then(() => console.log(this.user));
  }

}
