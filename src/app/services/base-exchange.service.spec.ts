import { TestBed } from '@angular/core/testing';

import { BaseExchangeService } from './base-exchange.service';

describe('BaseExchangeService', () => {
  let service: BaseExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
