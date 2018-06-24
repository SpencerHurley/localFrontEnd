import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {RoutefinderComponent} from "./routefinder/routefinder.component";
import {SegmentviewerComponent} from "./segmentviewer/segmentviewer.component";
import {LogrunComponent} from "./logrun/logrun.component";
import {TeamComponent} from "./team/team.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'findRoutes', component: RoutefinderComponent},
  {path: 'findRoutes/:segmentId', component: SegmentviewerComponent},
  {path: 'newRun', component : LogrunComponent},
  {path: 'team', component : TeamComponent},
  {path: 'team/:teamId', component: TeamViewerComponent},
  {path: '**', component: HomeComponent} // last
];

export const routing = RouterModule.forRoot(appRoutes);
