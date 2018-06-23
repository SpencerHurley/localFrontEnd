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
    this.Math = Math;
    this.route.params.subscribe(params => this.loadSegment(params['segmentId']));
  }
  Math;
  segment;
  loadSegment(id) {
    console.log("Loading segment " + id);
    this.service.findSegmentById(id)
      .then((response) => this.segment = response)
      .then(() => console.log(this.segment));
  }
  ngOnInit() {}

}
