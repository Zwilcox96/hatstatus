import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ServerStatusResponse, ServerStatusService} from '../server-status.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})

export class ServerStatusComponent implements OnInit {

  serverStatus: ServerStatusResponse;
  partyMinimum = 5;
  @Output() isParty = new EventEmitter<boolean>();

  constructor(private serverStatusService: ServerStatusService) { }

  ngOnInit(): void {
    this.getServerStatus();
  }

  getServerStatus(): void {
    this.serverStatusService.getServerStatus().subscribe(serverStatus => {
      this.serverStatus = serverStatus;
      if (this.serverStatus.online === false){
        this.isParty.emit(false);
        return;
      }
      this.isParty.emit(this.serverStatus.players.online >= this.partyMinimum);
      if (this.serverStatus.players.online >= this.partyMinimum){
        document.body.className = 'mat-typography party';
        document.getElementById('toolbar').className += ' party';
      }
    });
  }
}
