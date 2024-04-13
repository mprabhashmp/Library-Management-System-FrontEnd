import { TestBed } from '@angular/core/testing';

import { LmsUsersService } from './lms-users/lms-users.service';

describe('LmsUsersService', () => {
  let service: LmsUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmsUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
