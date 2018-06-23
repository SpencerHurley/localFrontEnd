import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  user;
  isAdmin = false;

  update() {
    console.log("Updating");
    console.log(this.user);

    this.service.updateRunner(this.user)
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
