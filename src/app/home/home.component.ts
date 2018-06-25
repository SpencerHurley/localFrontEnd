import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RunServiceClient} from "../services/run.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private runService: RunServiceClient) { }
  runners;
  runs;

  findRunsUpdated() {
    this.runService.findAllRuns()
      .then((runs) => {
        for (let i = 0; i < this.runners.length; i++) {
          this.runners[i].weeklyMileage = 0;
          this.runners[i].totalTime = 0;
          for (let j = 0; j < runs.length; j++) {
            if (runs[j].owner === this.runners[i]._id) {
              this.runners[i].weeklyMileage += runs[j].distance;
              this.runners[i].totalTime += runs[j].duration;
            }
          }
          this.runners[i].avgPace = Math.round(this.runners[i].totalTime * 100 / this.runners[i].weeklyMileage) / 100;
        }
        this.runs = runs;
        return this.sortRunners(this.runners);
      });
  }

  sortRunners(runners) {
    return runners.sort(function(a, b) {
      return b.weeklyMileage - a.weeklyMileage;
    });
  }

  ngOnInit() {
    this.service.findAllRunners()
      .then((runners) => this.runners = runners)
      .then(() => this.findRunsUpdated());
  }

}
