import { TestBed } from '@angular/core/testing';

import { HandlerprofileService } from './handlerprofile.service';

describe('HandlerprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlerprofileService = TestBed.get(HandlerprofileService);
    expect(service).toBeTruthy();
  });
});
