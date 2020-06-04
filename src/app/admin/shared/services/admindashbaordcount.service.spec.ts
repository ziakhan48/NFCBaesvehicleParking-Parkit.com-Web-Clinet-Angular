import { TestBed } from '@angular/core/testing';

import { AdmindashbaordcountService } from './admindashbaordcount.service';

describe('AdmindashbaordcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmindashbaordcountService = TestBed.get(AdmindashbaordcountService);
    expect(service).toBeTruthy();
  });
});
