import { TestBed } from '@angular/core/testing';

import { CoinmetroService } from './coinmetro.service';

describe('CoinmetroService', () => {
  let service: CoinmetroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinmetroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
