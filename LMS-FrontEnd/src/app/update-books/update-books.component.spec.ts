import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBooksComponent } from './update-books.component';

describe('UpdateBooksComponent', () => {
  let component: UpdateBooksComponent;
  let fixture: ComponentFixture<UpdateBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBooksComponent]
    });
    fixture = TestBed.createComponent(UpdateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
