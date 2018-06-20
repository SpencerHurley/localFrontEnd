import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user;
  sections = [];
  isAdmin = false;
  showSections = false;

  update() {
    console.log("Updating");
    this.service.updateUser(this.user)
      .then(() => {});
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  unenroll(enrollment) {
    // if (enrollment.section.availableSeats < enrollment.section.maxSeats) {
      console.log("Unenroll");
      this.sectionService
        .unenrollStudentInSection(enrollment.section._id)
        .then(() => this.sectionService.findSectionsForStudent())
        .then((sections) => this.sections = sections)
        .then(() => console.log(this.sections));
    // }
  }

  ngOnInit() {
    this.service
      .profile()
      .then((user) => user.json())
      .then(user => this.user = user)
      .then((user) => this.isAdmin = (user.username === 'admin'))
      .then(() => console.log(this.user));

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections )
      .then(() => this.showSections = (this.sections.length > 0));
  }

}
