import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
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

export class EventCountdownComponent implements OnInit{
  @Input() partyTime: boolean;

  events: Event[] = [
                      { title: 'HatCraft Reopening', date: new Date('2021-06-01T00:00:00-07:00'), description: 'Get ready for season 3!'}
                    ];

  timers: Observable<Time>[];
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.events.forEach(event => event.timer = this.timerService.timer(event.date));
  }

}
