import { TestBed } from '@angular/core/testing';

import { ParkinglistService } from './parkinglist.service';

describe('ParkinglistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkinglistService = TestBed.get(ParkinglistService);
    expect(service).toBeTruthy();
  });
});
