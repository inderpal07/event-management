import { Component, OnInit } from '@angular/core';
import { EventModel } from '../common/models/events.model';
import { EventsService } from '../events.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: EventModel;
  snackBarRef: any;
  constructor(
    private eventService: EventsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location
    ) {
    this.event = new EventModel('', null, '', null, '');
  }

  ngOnInit() {
  }

  createEvent() {
    this.eventService.createEvent(this.event);
    this.snackBarRef = this.snackBar.open('Event Stored');
    this.router.navigate(['/event-list']);
  }

  back() {
    this.location.back();
  }

}
