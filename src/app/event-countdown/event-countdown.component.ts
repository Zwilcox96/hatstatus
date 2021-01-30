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
                      { title: 'Animal Farm', date: new Date('2021-01-30T18:00:00-08:00'), description: 'Old McDonald had a farm and maybe you will too!'},
                      { title: 'Capture the Flag', date: new Date('2021-02-13T18:00:00-08:00'), description: 'Red VS Blue! Who will win???'},
                      { title: 'Minecraft Cribs', date: new Date('2021-02-28T16:30:00-08:00'), description: 'Show off your survival builds!'}
                    ];

  timers: Observable<Time>[];
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.events.forEach(event => event.timer = this.timerService.timer(event.date));
  }

}
