import { TestBed } from '@angular/core/testing';

import { InsertBooksService } from './insert-books/insert-books.service';

describe('InsertBooksService', () => {
  let service: InsertBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
