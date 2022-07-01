import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BinanceService } from './binance.service';

describe('BinanceService', () => {
  let service: BinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinanceService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
