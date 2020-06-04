import { TestBed } from '@angular/core/testing';

import { AddparkingService } from './addparking.service';

describe('AddparkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddparkingService = TestBed.get(AddparkingService);
    expect(service).toBeTruthy();
  });
});
