import { TestBed } from '@angular/core/testing';

import { ManageUsersService } from './lms-manage-users/manage-users.service';

describe('ManageUsersService', () => {
  let service: ManageUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
