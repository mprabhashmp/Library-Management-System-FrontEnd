import { TestBed } from '@angular/core/testing';

import { LmsHomeService } from './lms-home/lms-home.service';

describe('LmsHomeService', () => {
  let service: LmsHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmsHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
