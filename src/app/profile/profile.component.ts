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

  user = {
  };

  sections = [];
  isAdmin = false;

  update() {
    console.log(this.user);
    this.service.updateUser(this.user)
      .then(user => this.user = user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  unenroll(sectionId) {
    this.sectionService
      .unenrollStudentInSection(sectionId)
      .then(() => this.sectionService.findSectionsForStudent())
      .then((sections) => this.sections = sections)
      .then(() => console.log(this.sections));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user)
      .then((user) =>
          this.isAdmin = (user.username === 'admin')
      );

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
