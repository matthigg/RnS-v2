import { TestBed } from '@angular/core/testing';

import { OurWorkStateService } from './our-work-state.service';

describe('OurWorkStateService', () => {
  let service: OurWorkStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurWorkStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
