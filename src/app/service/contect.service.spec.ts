import { TestBed } from '@angular/core/testing';

import { ContectService } from './contect.service';

describe('ContectService', () => {
  let service: ContectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
