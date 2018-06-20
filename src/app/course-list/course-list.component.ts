import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {SectionServiceClient} from "../services/section.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  activeCourse;
  courses = [];
  sections = [];
  sectionName;
  seats;
  constructor(private service: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  changeActive(courseId) {
    this.activeCourse = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then((sections) => this.sections = sections);
  }
  createSection(sectionName, seats) {
    this
      .sectionService
      .createSection(this.activeCourse, sectionName, seats)
      .then(() => this.sectionService.findSectionsForCourse(this.activeCourse))
      .then((sections) => this.sections = sections);
  }
  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => this.sectionService.findSectionsForCourse(this.activeCourse))
      .then((sections) => this.sections = sections);
  }
  ngOnInit() {
    this.service.findAllCourses()
      .then((courses) => this.courses = courses);
  }

}
