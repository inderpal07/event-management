import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from './common/models/events.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventUrl = 'assets/events.json';
  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.eventUrl);
  }

  createEvent(event: EventModel) {
    const pastEvents = JSON.parse(localStorage.getItem('events'));
    pastEvents.push(event);
    localStorage.setItem('events', JSON.stringify(pastEvents));
  }

}
