import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteFinderServiceClient} from "../services/routefinder.service.client";

@Component({
  selector: 'app-segmentviewer',
  templateUrl: './segmentviewer.component.html',
  styleUrls: ['./segmentviewer.component.css']
})
export class SegmentviewerComponent implements OnInit {

  constructor(private service: RouteFinderServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSegment(params['segmentId']));
  }

  segmentInfo;
  loadSegment(id) {
    this.service.findSegmentById(id)
      .then((response) => this.segmentInfo = response);
  }

  ngOnInit() {}

}
