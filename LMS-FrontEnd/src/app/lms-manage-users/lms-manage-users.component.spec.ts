import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsManageUsersComponent } from './lms-manage-users.component';

describe('LmsManageUsersComponent', () => {
  let component: LmsManageUsersComponent;
  let fixture: ComponentFixture<LmsManageUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsManageUsersComponent]
    });
    fixture = TestBed.createComponent(LmsManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
