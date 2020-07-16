import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { WhyEducationComponent } from './why-education/why-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurWorkComponent,
    AboutUsComponent,
    GetInvolvedComponent,
    WhyEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
