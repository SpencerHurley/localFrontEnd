import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminPageComponent },
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
