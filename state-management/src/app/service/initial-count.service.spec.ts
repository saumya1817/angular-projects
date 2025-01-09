import { TestBed } from '@angular/core/testing';

import { InitialCountService } from './initial-count.service';

describe('InitialCountService', () => {
  let service: InitialCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
