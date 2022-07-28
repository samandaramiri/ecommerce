import { TestBed } from '@angular/core/testing';

import { BestproductService } from './bestproduct.service';

describe('BestproductService', () => {
  let service: BestproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
