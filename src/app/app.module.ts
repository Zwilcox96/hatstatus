import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { ServerStatusService } from './server-status.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { EventCountdownComponent } from './event-countdown/event-countdown.component';
import { TimerService } from './timer.service';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ServerStatusComponent,
    EventCountdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [
    ServerStatusService,
    HttpClient,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
