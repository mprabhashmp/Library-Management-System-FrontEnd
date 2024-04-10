import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBooksComponent } from './insert-books.component';

describe('InsertBooksComponent', () => {
  let component: InsertBooksComponent;
  let fixture: ComponentFixture<InsertBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertBooksComponent]
    });
    fixture = TestBed.createComponent(InsertBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
