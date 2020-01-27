import { Component, OnInit, Inject } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isOTPSent = false;
  mobileNumber: string;
  otpList: object;
  otp: string;
  constructor(
    private userAuthService: UserAuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  getOtps() {
    this.userAuthService.getOtps().subscribe((otpList: any) => {
      this.otpList = otpList[0];
      this.isOTPSent = true;
    });
  }

  validateLogin() {
    if (this.otpList.hasOwnProperty(this.mobileNumber)) {
      if (this.otpList[this.mobileNumber] === this.otp) {
        this.router.navigate(['/event-list']);
      } else {
        const snackBarRef = this.snackBar.open('Invalid OTP');
        console.log('Invalid OTP');
      }
    } else {
      console.log('User doesnot exists!');
      const snackBarRef = this.snackBar.open('User doesnot exists!');
    }
  }

}
