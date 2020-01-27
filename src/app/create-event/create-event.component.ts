import { Component, OnInit } from '@angular/core';
import { EventModel } from '../common/models/events.model';
import { EventsService } from '../events.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: EventModel;
  constructor(
    private eventService: EventsService,
    private snackBar: MatSnackBar,
    private router: Router
    ) {
    this.event = new EventModel('', null, '', null, '');
  }

  ngOnInit() {
  }

  createEvent() {
    this.eventService.createEvent(this.event);
    const snackBarRef = this.snackBar.open('Event Stored');
    this.router.navigate(['/event-list']);
  }

}
