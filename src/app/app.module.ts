import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheTeamComponent } from './the-team/the-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurWorkComponent,
    AboutUsComponent,
    GetInvolvedComponent,
    LoginComponent,
    DonateComponent,
    RegisterComponent,
    TheTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
