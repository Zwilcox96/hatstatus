// Code borrowed from Stack Overflow https://stackoverflow.com/a/46089174
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { timer } from 'rxjs';

export interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  constructor() { }

  private createTimeObject(date: Date): Time {

    const now = new Date().getTime();
    const distance = date.getTime() - now;

    const time: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};
    time.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    time.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    time.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    time.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return time;
  }

  public timer(date: Date): Observable<Time> {
    return timer(0, 1000).pipe(map(() => this.createTimeObject(date)));
  }
}
