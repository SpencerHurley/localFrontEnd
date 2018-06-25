import { Component, OnInit } from '@angular/core';
import {TeamServiceClient} from "../services/team.service.client";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private service: TeamServiceClient) { }

  name;
  teams;
  ngOnInit() {
    this.service.findAllTeams()
      .then(teams => this.teams = teams);
  }

  enroll(team) {
    this.service.enrollRunnerInTeam(team._id)
      .then(() => {});
  }

  createTeam(name) {
    console.log("Creating team");
    const team = {
      name : name
    }
    this.service.createTeam(team)
      .then(() => this.service.findAllTeams())
      .then((teams) => this.teams = teams);
  }
}
