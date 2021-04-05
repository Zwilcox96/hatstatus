import {Component, OnInit, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {ServerStatusResponse, ServerStatusService} from '../server-status.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})

export class ServerStatusComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer: ElementRef;

  @Output()
  isParty = new EventEmitter<boolean>();

  serverStatus: ServerStatusResponse;
  partyMinimum = 5;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private serverStatusService: ServerStatusService, private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getServerStatus();
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
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

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    console.log(this.demoYouTubePlayer.nativeElement.clientWidth);
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
