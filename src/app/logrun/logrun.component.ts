import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logrun',
  templateUrl: './logrun.component.html',
  styleUrls: ['./logrun.component.css']
})
export class LogrunComponent implements OnInit {

  run = {
    date: new Date()
  };
  constructor() { }

  send() {
    this.run.date = new Date();
    console.log(this.run);
  }
  ngOnInit() {
  }

}
