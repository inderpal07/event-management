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
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockSnackbar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule, 
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockSnackbar = jasmine.createSpyObj(['open']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.mobileNumber = "8375999719";
    expect(component.mobileNumber).toBeDefined();
  });

  it('validateLogin should work as expected', () => {
    component.otpList =  [{
      "8375999719": "5050",
      "9041194094": "5050"
    }];
    component.mobileNumber = "";
    expect(component.snackBarRef).toBeUndefined();
    component.validateLogin();
    expect(component.snackBarRef).toBeDefined();
  });

  it('getOtps should be tested', async() => {
    expect(component.isOTPSent).toBeFalsy();
  });
});
