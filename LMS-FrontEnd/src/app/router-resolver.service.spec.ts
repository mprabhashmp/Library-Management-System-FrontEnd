import { TestBed } from '@angular/core/testing';

import { RouterResolverService } from './router-resolver.service';

describe('RouterResolverService', () => {
  let service: RouterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
