import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamServiceClient} from "../services/team.service.client";
import {RunServiceClient} from "../services/run.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teamviewer',
  templateUrl: './teamviewer.component.html',
  styleUrls: ['./teamviewer.component.css']
})
export class TeamviewerComponent implements OnInit {

  constructor(private service: TeamServiceClient,
              private runService: RunServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute) {
    this.math = Math;
    this.route.params.subscribe(params => this.loadTeam(params['teamId']));
  }

  math;
  team;
  runners;
  runs;
  curUser;

  joinTeam() {
    this.userService.profile()
      .then((user) => this.curUser = user)
      .then(() => {
        if (this.curUser == null) {
          window.alert('Must be logged in to join team!');
        } else {
          this.service.enrollRunnerInTeam(this.team._id);
          }})
      .then(() => this.loadTeam(this.team._id));
  }

  loadTeam(teamId) {
    this.service.findTeamById(teamId)
      .then((team) => this.team = team)
      .then(() => console.log(this.team))
      .then(() => this.findRunners(teamId));
  }

  findRunners(teamId) {
    this.service.findRunnersForTeam(teamId)
      .then((runners) => this.runners = runners)
      .then(() => this.findRunsUpdated())
      .then(() => console.log(this.runners));
  }

  findRunsUpdated() {

    this.runService.findAllRuns()
      .then((runs) => {
        for (let i = 0; i < this.runners.length; i++) {
          this.runners[i].weeklyMileage = 0;
          this.runners[i].totalTime = 0;
          for (let j = 0; j < runs.length; j++) {
            if (runs[j].owner === this.runners[i].runner._id) {
              this.runners[i].weeklyMileage += runs[j].distance;
              this.runners[i].totalTime += runs[j].duration;
            }
          }
          this.runners[i].avgPace = Math.round(this.runners[i].totalTime * 100 / this.runners[i].weeklyMileage) / 100;
        }

        return this.sortRunners(this.runners);
      });

  }

  sortRunners(runners) {
    return runners.sort(function(a, b) {
      return b.weeklyMileage - a.weeklyMileage;
    });
  }

  ngOnInit() {}

}
