import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { CreateEventComponent } from './create-event.component';
import { EventModel } from '../common/models/events.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventComponent ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule, 
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createEvent method should work as expected', () => {
    component.event = new EventModel('test event', null, '', null, '');
    const navigateSpy = spyOn(router, 'navigate');
    component.createEvent();
    expect(component.snackBarRef).toBeDefined();
    expect(navigateSpy).toHaveBeenCalledWith(['/event-list']);
  });

  it('back method should be defined and call location.back', () => {
    expect(component.back).toBeDefined();
    const navigateSpy = spyOn(location, 'back');
    component.back();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
