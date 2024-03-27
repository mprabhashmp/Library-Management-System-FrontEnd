import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsBooksComponent } from './lms-books.component';

describe('LmsBooksComponent', () => {
  let component: LmsBooksComponent;
  let fixture: ComponentFixture<LmsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsBooksComponent]
    });
    fixture = TestBed.createComponent(LmsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
