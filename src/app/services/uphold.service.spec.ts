import { TestBed } from '@angular/core/testing';

import { UpholdService } from './uphold.service';

describe('UpholdService', () => {
  let service: UpholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
