import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { WhyEducationComponent } from './why-education/why-education.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'why-education', component: WhyEducationComponent},
  {path: 'our-work', component: OurWorkComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'get-involved', component: GetInvolvedComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
