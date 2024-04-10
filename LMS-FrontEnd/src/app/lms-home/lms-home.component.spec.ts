import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsHomeComponent } from './lms-home.component';

describe('LmsHomeComponent', () => {
  let component: LmsHomeComponent;
  let fixture: ComponentFixture<LmsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsHomeComponent]
    });
    fixture = TestBed.createComponent(LmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
