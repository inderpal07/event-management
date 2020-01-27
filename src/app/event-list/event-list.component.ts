import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventsService } from '../events.service';
import { EventModel } from '../common/models/events.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {

  events: EventModel[];
  searchTerm: string;
  constructor(
    private eventService: EventsService,
    private router: Router,
    private changeDetectionRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: EventModel[]) => {
      events = events.concat(JSON.parse(localStorage.getItem('events')));
      this.events = events;
      this.changeDetectionRef.detectChanges();
    });
  }
  createEvent() {
    this.router.navigate(['/create-event']);
  }

}
