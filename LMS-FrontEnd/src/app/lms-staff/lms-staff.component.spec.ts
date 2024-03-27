import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsStaffComponent } from './lms-staff.component';

describe('LmsStaffComponent', () => {
  let component: LmsStaffComponent;
  let fixture: ComponentFixture<LmsStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsStaffComponent]
    });
    fixture = TestBed.createComponent(LmsStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
