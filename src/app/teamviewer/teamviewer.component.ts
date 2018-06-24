import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamServiceClient} from "../services/team.service.client";
import {RunServiceClient} from "../services/run.service.client";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teamviewer',
  templateUrl: './teamviewer.component.html',
  styleUrls: ['./teamviewer.component.css']
})
export class TeamviewerComponent implements OnInit {

  constructor(private service: TeamServiceClient,
              private runService: RunServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadTeam(params['teamId']));
  }

  team;
  runners;
  runs;
  loadTeam(teamId) {
    this.service.findTeamById(teamId)
      .then((team) => this.team = team)
      .then(() => console.log(this.team))
      .then(() => this.findRunners(teamId));
  }

  findRunners(teamId) {
    this.service.findRunnersForTeam(teamId)
      .then((runners) => this.runners = runners)
      .then(() => this.findRuns())
      .then(() => this.sortRunners())
      .then(() => console.log(this.runners));
  }

  findRuns() {
    this.runners.forEach(runner => {
      this.runService.findRunsForUser(runner.runner._id)
        .then((runs) => {
          let mileage = 0;
          let time = 0;
          runs.forEach((run) => {
            mileage += run.distance;
            time += run.duration;
          });
          runner.weeklyMileage = mileage;
          runner.avgPace = Math.round(time * 100 / mileage) / 100;
        });
    });
  }

  sortRunners() {
    this.runners.sort(function (a, b) {
      return a.weeklyMileage - b.weeklyMileage;
    });
    console.log(this.runners);
  }

  ngOnInit() {
  }

}
