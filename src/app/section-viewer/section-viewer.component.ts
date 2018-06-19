import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSection(params['sectionId']));
  }

  section = {};
  loadSection(sectionId) {
    this.service.findSectionById(sectionId)
      .then(section => this.section = section);
  }

  update(section) {
    this.service.updateSection(section)
      .then(() => this.loadSection(section._id));
  }

  ngOnInit() {
  }

}
