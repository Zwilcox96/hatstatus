import { Component, OnInit } from '@angular/core';
import { TimerService, Time } from '../timer.service';
import {Observable} from 'rxjs';

interface Event {
  title: string;
  date: Date;
  description: string;
  timer?: Observable<Time>;
}

@Component({
  selector: 'app-event-countdown',
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css']
})

export class EventCountdownComponent implements OnInit {

  events: Event[] = [
                      { title: 'Secret Santa Exchange', date: new Date('2020-12-29T19:30:00-08:00'), description: 'Time to share all of our presents'},
                      { title: 'The Hunger Games', date: new Date('2021-01-06T18:00:00-08:00'), description: 'Murder your friends'}
                    ]

  timers: Observable<Time>[]
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.events.forEach(event => event.timer = this.timerService.timer(event.date));
  }

}
