import { TestBed } from '@angular/core/testing';

import { SlotreservationService } from './slotreservation.service';

describe('SlotreservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlotreservationService = TestBed.get(SlotreservationService);
    expect(service).toBeTruthy();
  });
});
