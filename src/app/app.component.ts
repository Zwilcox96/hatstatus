import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlexStatus';
  partyTime: boolean;

  onPartyTime(isParty: boolean): void {
    this.partyTime = isParty;
  }
}
