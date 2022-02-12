/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetIsMobileService } from './get-isMobile.service';

describe('Service: GetIsMobile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIsMobileService]
    });
  });

  it('should ...', inject([GetIsMobileService], (service: GetIsMobileService) => {
    expect(service).toBeTruthy();
  }));
});
