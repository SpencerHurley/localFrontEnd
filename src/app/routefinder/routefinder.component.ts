import { Component, OnInit } from '@angular/core';
import {RouteFinderServiceClient} from "../services/routefinder.service.client";

@Component({
  selector: 'app-routefinder',
  templateUrl: './routefinder.component.html',
  styleUrls: ['./routefinder.component.css']
})
export class RoutefinderComponent implements OnInit {

  constructor(private service: RouteFinderServiceClient) {
    this.Math = Math;
  }

  city;
  coordinates;
  segments = [];
  segmentInfo;
  Math;
  searchCity() {
    console.log("searching");
    this.service.findCoordinatesForCity(this.city)
      .then((response) => this.coordinates = response.results[0].geometry.bounds)
      .then(() => console.log(this.coordinates))
      .then(() => this.service.findRoutesByCity(this.coordinates))
      .then((response) => this.segments = response.segments)
      .then(() => {
        if (this.segments.length === 0) {
          window.alert("No segments found for this city.");
        } else {
          console.log(this.segments);
        }
        }
      );
  }

  getSegmentInfo(segmentId) {
    this.service.findSegmentById(segmentId)
      .then((response) => this.segmentInfo = response)
      .then(() => console.log(this.segmentInfo));
  }

  ngOnInit() {
  }

}
