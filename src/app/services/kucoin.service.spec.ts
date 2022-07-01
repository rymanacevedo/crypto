import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KucoinService } from './kucoin.service';

describe('KucoinService', () => {
  let service: KucoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KucoinService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(KucoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
