import { TestBed } from '@angular/core/testing';

import { ParkingprofileService } from './parkingprofile.service';

describe('ParkingprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingprofileService = TestBed.get(ParkingprofileService);
    expect(service).toBeTruthy();
  });
});
