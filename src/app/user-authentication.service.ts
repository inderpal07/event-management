import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  otpUrl = 'assets/otps.json';
  constructor(private http: HttpClient) { }

  getOtps() {
    return this.http.get(this.otpUrl);
  }

}
