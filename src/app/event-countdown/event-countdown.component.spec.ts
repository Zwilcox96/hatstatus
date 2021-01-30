import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCountdownComponent } from './event-countdown.component';
import { ServerStatusComponent } from '../server-status/server-status.component';
import {MatCardModule} from '@angular/material/card';

describe('EventCountdownComponent', () => {
  let component: EventCountdownComponent;
  let fixture: ComponentFixture<EventCountdownComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCountdownComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Title is "Watch this space for our next event!" with no events', () => {
      component.events = [];
      fixture.detectChanges();
      h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('Watch this space for our next event!');
  });

  it('Title is "Our Next Event:" with 1 event', () => {
    component.events = [
      { title: 'Minecraft Cribs', date: new Date('2021-02-28T16:30:00-08:00'), description: 'Show off your survival builds!'}
    ];
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Our Next Event:');
  });

  it('Title is "Upcoming Events:" with 2+ events', () => {
    component.events = [
      { title: 'Minecraft Cribs', date: new Date('2021-02-28T16:30:00-08:00'), description: 'Show off your survival builds!'},
      { title: 'Minecraft Cribs', date: new Date('2021-02-28T16:30:00-08:00'), description: 'Show off your survival builds!'}
    ];
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Upcoming Events:');
  });

  it('Text should be black if there are less than 5 players online', () => {
    component.partyTime = false;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(window.getComputedStyle(h1).color).toBe('rgb(0, 0, 0)');
  });

  it('Text should be white if there are at least 5 players online', () => {
    component.partyTime = true;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    // to test style we need to get the computed style from window
    expect(window.getComputedStyle(h1).color).toBe('rgb(255, 255, 255)');
  });
});
