import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ServerStatusComponent } from './server-status.component';
import {ServerStatusResponse, ServerStatusService} from '../server-status.service';
import {of, Subject} from 'rxjs';
import {MatListModule} from '@angular/material/list';

class MockServerStatusService {
  getServerStatus(): any {
    return of({ players: { online: 1, }, online: true });
  }
}

describe('ServerStatusComponent', () => {
  let component: ServerStatusComponent;
  let fixture: ComponentFixture<ServerStatusComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let h1: HTMLElement;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerStatusComponent ],
      imports: [ HttpClientTestingModule, MatListModule ],
      providers: [ {provide: ServerStatusService, useClass: MockServerStatusService}]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Text should say "HatCraft is running!" if the server is running', () => {
    component.serverStatus.online = true;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('HatCraft is running!');
  });

  it('Text should say "HatCraft is not running!" if the server is  not running', () => {
    component.serverStatus.online = false;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('HatCraft is not running! You should reach out to the admins.');
  });

  it('Text should be black if there are less than 5 players online', () => {
    component.serverStatus.players.online = 1;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(window.getComputedStyle(h1).color).toBe('rgb(0, 0, 0)');
  });

  it('Text should be white if there are at least 5 players online', () => {
    component.serverStatus.players.online = 5;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    // to test style we need to get the computed style from window
    expect(window.getComputedStyle(h1).color).toBe('rgb(255, 255, 255)');
  });
});
