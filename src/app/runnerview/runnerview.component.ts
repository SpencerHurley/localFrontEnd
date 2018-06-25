import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-runnerview',
  templateUrl: './runnerview.component.html',
  styleUrls: ['./runnerview.component.css']
})
export class RunnerviewComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.findRunner(params['runnerId']));

  }

  user;

  findRunner(id) {
    this.service.findRunnerById(id)
      .then((runner) => this.user = runner)
      .then(() => console.log(this.user));
  }

  update() {
    this.service.updateRunner(this.user)
      .then(() => this.router.navigate(['/admin']));
  }

  deleteUser() {
    this.service.deleteUser(this.user)
      .then(() => this.router.navigate(['/admin']));
  }
  ngOnInit() {
  }

}
