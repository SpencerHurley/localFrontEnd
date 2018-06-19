import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: SectionServiceClient) { }

  sections = [];
  showProfile = false;

  ngOnInit() {
    this.service.findSectionsForStudent()
      .then((sections) => this.sections = sections)
      .then(() => this.showProfile = (this.sections.length > 0));
  }

}
