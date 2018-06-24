import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {RunServiceClient} from "../services/run.service.client";
import {Router} from "@angular/router";
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private runService: RunServiceClient,
              private router: Router) { }

  user;
  runs;
  isAdmin = false;

  update() {
    this.service.updateRunner(this.user)
      .then(() => {});
  }

  getRuns() {
    this.runService.findRunsForUser(this.user._id)
      .then((response) => this.runs = response)
      .then(() => console.log(this.runs));
  }

  ngOnInit() {
    this.service
      .profile()
      .then((user) => user.json())
      .then(user => this.user = user)
      .then((user) => this.isAdmin = (user.username === 'admin'))
      .then(() => this.getRuns());
  }

}
