import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpholdService } from './uphold.service';

describe('UpholdService', () => {
  let service: UpholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpholdService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UpholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
