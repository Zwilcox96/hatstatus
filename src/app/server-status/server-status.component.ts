import { Component, OnInit } from '@angular/core';
import {ServerStatusResponse, ServerStatusService} from '../server-status.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})

export class ServerStatusComponent implements OnInit {

  serverStatus: ServerStatusResponse;

  constructor(private serverStatusService: ServerStatusService) {
    this.getServerStatus();
  }

  ngOnInit(): void { }

  getServerStatus(): void {
    this.serverStatusService.getServerStatus().subscribe(serverStatus => this.serverStatus = serverStatus);
  }
}
