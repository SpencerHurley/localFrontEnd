import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: SectionServiceClient) { }
  ngOnInit() {}

}
