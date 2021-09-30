import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';

@NgModule({
  declarations: [
    AppComponent,LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


