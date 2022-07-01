import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoinbaseService } from './coinbase.service';

describe('CoinbaseService', () => {
  let service: CoinbaseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinbaseService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoinbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
