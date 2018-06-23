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
    routing
  ],
  providers: [
    RouteFinderServiceClient,
    UserServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
