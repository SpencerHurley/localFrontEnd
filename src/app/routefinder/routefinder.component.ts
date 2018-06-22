import { Component, OnInit } from '@angular/core';
import {RouteFinderServiceClient} from "../services/routefinder.service.client";

@Component({
  selector: 'app-routefinder',
  templateUrl: './routefinder.component.html',
  styleUrls: ['./routefinder.component.css']
})
export class RoutefinderComponent implements OnInit {

  constructor(private service: RouteFinderServiceClient) { }

  city;
  coordinates = {};
  searchCity() {
    this.service.findCoordinatesForCity(this.city)
      .then((response) => this.coordinates = response)
      .then(() => console.log(this.coordinates));
  }
  ngOnInit() {
  }

}
