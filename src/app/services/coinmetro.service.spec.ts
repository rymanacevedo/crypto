import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoinmetroService } from './coinmetro.service';

describe('CoinmetroService', () => {
  let service: CoinmetroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinmetroService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoinmetroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
