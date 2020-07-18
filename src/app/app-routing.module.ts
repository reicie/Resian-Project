import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TheTeamComponent } from './the-team/the-team.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'our-work', component: OurWorkComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'get-involved', component: GetInvolvedComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'team', component: TheTeamComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
