import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBooksComponent } from './delete-books.component';

describe('DeleteBooksComponent', () => {
  let component: DeleteBooksComponent;
  let fixture: ComponentFixture<DeleteBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBooksComponent]
    });
    fixture = TestBed.createComponent(DeleteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
