import { TestBed } from '@angular/core/testing';

import { UserAuthenticationService } from './user-authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('UserAuthenticationService', () => {
  const testOtps = [{
    "8375999719": "5050",
    "9041194094": "5050"
  }];
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: UserAuthenticationService = TestBed.get(UserAuthenticationService);
    expect(service).toBeTruthy();
  });

  it('getOtps should work as expected', () => {
    const service: UserAuthenticationService = TestBed.get(UserAuthenticationService);
    spyOn(service, 'getOtps').and.returnValue(of([testOtps]));
    service.getOtps().subscribe(((otps)=>{
      expect(otps).toBeTruthy();
      expect(JSON.stringify(otps[0])).toEqual(JSON.stringify(testOtps));
    }));
  });
});
