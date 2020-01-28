import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import { EventModel } from './common/models/events.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('EventsService', () => {
  let service: EventsService;
  let testEvent = new EventModel('Test Event', '', 'Test location', new Date(), 'male');
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });

  it('getEvent should work as expected', () => {
    const service: EventsService = TestBed.get(EventsService);
    spyOn(service, 'getEvents').and.returnValue(of([testEvent]));
    service.getEvents().subscribe(((events: EventModel[])=>{
      expect(events).toBeTruthy();
      expect(events[0]).toEqual(testEvent);
    }));
  });

  it('createEvent should work as expected', () => {
    const service: EventsService = TestBed.get(EventsService);
    localStorage.setItem('events', JSON.stringify([]));
    service.createEvent(testEvent);
    expect(localStorage.getItem('events')).toBeTruthy();
  });
});
