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
    SegmentviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgCircleProgressModule.forRoot({
      // set defaults here
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
