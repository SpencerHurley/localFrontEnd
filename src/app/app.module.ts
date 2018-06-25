import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from "./services/user.service.client";
import { HomeComponent } from './home/home.component';
import { RoutefinderComponent } from './routefinder/routefinder.component';
import { TeamComponent } from './team/team.component';
import {RouteFinderServiceClient} from "./services/routefinder.service.client";
import { SegmentviewerComponent } from './segmentviewer/segmentviewer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LogrunComponent } from './logrun/logrun.component';
import {RunServiceClient} from "./services/run.service.client";
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TeamServiceClient} from "./services/team.service.client";
import { TeamviewerComponent } from './teamviewer/teamviewer.component';
import {SegmentServiceClient} from "./services/segment.service.client";
import { RunviewerComponent } from './runviewer/runviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    RoutefinderComponent,
    TeamComponent,
    SegmentviewerComponent,
    LogrunComponent,
    NavbarComponent,
    TeamviewerComponent,
    RunviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routing,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [
    RouteFinderServiceClient,
    UserServiceClient,
    RunServiceClient,
    TeamServiceClient,
    SegmentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
