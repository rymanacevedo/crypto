import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseExchangeService } from './base-exchange.service';

describe('BaseExchangeService', () => {
  let service: BaseExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseExchangeService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BaseExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
