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
              private router: Router) {
    this.math = Math;
  }

  user;
  runs;
  isAdmin = false;
  mileage;
  math;
  teams;
  segments;
  update() {
    this.service.updateRunner(this.user)
      .then(() => this.service.profile())
      .then((user) => this.user = user);
  }

  getRuns() {
    this.runService.findRunsForUser(this.user._id)
      .then((response) => this.runs = response)
      .then(() => console.log(this.runs))
      .then(() => {
        const today = new Date();
        const previousweek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.runs = this.runs.filter(function(a) {
          const d = new Date(a.date);
          return previousweek.getTime() < d.getTime();
          });
        })
      .then(() => {
        this.mileage = 0;
        this.runs.forEach(e => this.mileage += e.distance);
        console.log(this.mileage);
      });
  }

  getSegments() {
    this.service.findSegments(this.user._id)
      .then((segments) => this.segments = segments)
      .then(() => console.log(this.segments));
  }

  getTeams() {
    this.runService.findTeamsForRunner(this.user._id)
      .then((response) => this.teams = response);
  }

  nav(runId) {
    this.router.navigate(['/run/' + runId]);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user =>  this.user = user)
      .then(() => console.log(this.user))
      .then(() => {
        if (this.user.LOGIN) {
          console.log("Log in!");
          window.alert('You need to log in before accessing this page.');
          this.router.navigate(['/login']);
          return;
        }
      })
      .then(() => this.isAdmin = (this.user.username === 'admin'))
      .then(() => this.getRuns())
      .then(() => this.getTeams())
      .then(() => this.getSegments());
  }

}
