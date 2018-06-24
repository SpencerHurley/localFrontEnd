import { Component, OnInit } from '@angular/core';
import {RunServiceClient} from "../services/run.service.client";

@Component({
  selector: 'app-logrun',
  templateUrl: './logrun.component.html',
  styleUrls: ['./logrun.component.css']
})
export class LogrunComponent implements OnInit {

  run = {
    date: new Date()
  };
  response;
  constructor(private service: RunServiceClient) { }

  send() {
    this.run.date = new Date();
    this.service.createRun(this.run)
      .then((run) => this.response = run)
      .then(() => console.log(this.response));
  }
  ngOnInit() {
  }

}
