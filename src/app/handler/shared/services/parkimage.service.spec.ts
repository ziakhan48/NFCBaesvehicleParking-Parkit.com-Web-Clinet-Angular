import { TestBed } from '@angular/core/testing';

import { ParkimageService } from './parkimage.service';

describe('ParkimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkimageService = TestBed.get(ParkimageService);
    expect(service).toBeTruthy();
  });
});
