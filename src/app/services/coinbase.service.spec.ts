import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CoinbaseService } from './coinbase.service';

describe('CoinbaseService', () => {
  let service: CoinbaseService;
  let client: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(CoinbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
