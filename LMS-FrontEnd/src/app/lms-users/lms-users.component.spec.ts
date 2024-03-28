import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsUsersComponent } from './lms-users.component';

describe('LmsUsersComponent', () => {
  let component: LmsUsersComponent;
  let fixture: ComponentFixture<LmsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsUsersComponent]
    });
    fixture = TestBed.createComponent(LmsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
