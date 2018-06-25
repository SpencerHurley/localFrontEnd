import { Component, OnInit } from '@angular/core';
import {RunServiceClient} from "../services/run.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logrun',
  templateUrl: './logrun.component.html',
  styleUrls: ['./logrun.component.css']
})
export class LogrunComponent implements OnInit {
  constructor(private service: RunServiceClient,
              private userService: UserServiceClient,
              private router: Router) { }
  run;
  model;
  user;
  response;
  segments;
  test;
  send() {
    if (this.model != null) {
      this.run.date = new Date(this.model.year, this.model.month - 1, this.model.day);
      console.log(this.run.date);
    }
    this.service.createRun(this.run)
      .then((run) => this.response = run)
      .then(() => console.log(this.response))
      .then(() => this.router.navigate(['/profile']));
  }

  ngOnInit() {
    this.userService.profile()
      .then((user) => this.user = user)
      .then(() => this.userService.findSegments(this.user._id))
      .then((segments) => this.segments = segments);
  }
}
