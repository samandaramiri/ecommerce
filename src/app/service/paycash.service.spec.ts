import { TestBed } from '@angular/core/testing';

import { PaycashService } from './paycash.service';

describe('PaycashService', () => {
  let service: PaycashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaycashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
