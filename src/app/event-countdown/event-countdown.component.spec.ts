import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCountdownComponent } from './event-countdown.component';

describe('EventCountdownComponent', () => {
  let component: EventCountdownComponent;
  let fixture: ComponentFixture<EventCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCountdownComponent ]
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
});
