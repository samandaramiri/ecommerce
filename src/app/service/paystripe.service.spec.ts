import { TestBed } from '@angular/core/testing';

import { PaystripeService } from './paystripe.service';

describe('PaystripeService', () => {
  let service: PaystripeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaystripeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
