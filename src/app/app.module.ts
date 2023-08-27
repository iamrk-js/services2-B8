import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerModule } from './passenger/passenger.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassengerDashboardComponent } from './shared/components/passenger-dashboard/passenger-dashboard.component';
import { PassCountComponent } from './shared/components/pass-count/pass-count.component';
import { PassCardComponent } from './shared/components/pass-card/pass-card.component';
@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
