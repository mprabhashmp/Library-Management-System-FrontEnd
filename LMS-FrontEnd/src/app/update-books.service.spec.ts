import { TestBed } from '@angular/core/testing';

import { UpdateBooksService } from './update-books/update-books.service';

describe('UpdateBooksService', () => {
  let service: UpdateBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
