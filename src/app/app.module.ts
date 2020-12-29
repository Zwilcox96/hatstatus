import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import {ServerStatusService} from './server-status.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ServerStatusService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
