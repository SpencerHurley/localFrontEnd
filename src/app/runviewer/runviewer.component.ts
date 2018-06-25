import { Component, OnInit } from '@angular/core';
import {RunServiceClient} from "../services/run.service.client";
import {ActivatedRoute} from "@angular/router";
import {SegmentServiceClient} from "../services/segment.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-runviewer',
  templateUrl: './runviewer.component.html',
  styleUrls: ['./runviewer.component.css']
})
export class RunviewerComponent implements OnInit {

  constructor(private service: RunServiceClient,
              private segmentService: SegmentServiceClient,
              private userService: UserServiceClient,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params => this.findRun(params['runId']));
  }

  run;
  segment;
  owner;
  findRun(id) {
    this.service.findRunById(id)
      .then((response) => this.run = response)
      .then(() => console.log(this.run))
      .then(() => this.userService.findRunnerById(this.run.owner))
      .then((runner) => this.owner = runner)
      .then(() => console.log(this.owner))
      .then(() => {
        if (this.run.route) {
          this.segmentService.findSegmentById(this.run.route)
            .then((response) => this.segment = response)
            .then(() => console.log(this.segment));
        }
      });
  }

  star() {
    this.service.starRun(this.run._id)
      .then(() => this.findRun(this.run._id))
      .then((run) => this.run = run);
  }

  ngOnInit() {
  }

}
