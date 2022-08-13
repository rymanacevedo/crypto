import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AlpacaService } from './alpaca.service';

describe('AlpacaService', () => {
  let service: AlpacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlpacaService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlpacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
