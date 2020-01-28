import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Pipe, PipeTransform } from '@angular/core';
import { EventModel } from '../common/models/events.model';
import { Router } from '@angular/router';

@Pipe({name: 'searchFilter'})
class MockPipe implements PipeTransform {
  testEvent = new EventModel('Test Event', '', 'Test location', new Date(), 'male');
  transform(items: EventModel[], filter: string): any {
        return this.testEvent;
    }
}

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListComponent, MockPipe ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule, 
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ScrollingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createEvent should work as expected', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.createEvent();
    expect(navigateSpy).toHaveBeenCalledWith(['/create-event']);
  });

  it('ngOnInit should work as expected', async() => {
    const ngOnInitSpy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

});
