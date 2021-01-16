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
                      { title: 'Enter the End!', date: new Date('2021-01-16T18:00:00-08:00'), description: 'Dragon fight and end exploration!!!'},
                      { title: 'Build Battles', date: new Date('2021-01-19T18:00:00-08:00'), description: 'Build all the things!'}
                    ]

  timers: Observable<Time>[]
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.events.forEach(event => event.timer = this.timerService.timer(event.date));
  }

}
