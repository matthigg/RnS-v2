import { TestBed } from '@angular/core/testing';

import { BusinessInformationService } from './business-information.service';

describe('BusinessInformationService', () => {
  let service: BusinessInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
