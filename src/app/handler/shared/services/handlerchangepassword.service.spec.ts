import { TestBed } from '@angular/core/testing';

import { HandlerchangepasswordService } from './handlerchangepassword.service';

describe('HandlerchangepasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlerchangepasswordService = TestBed.get(HandlerchangepasswordService);
    expect(service).toBeTruthy();
  });
});
