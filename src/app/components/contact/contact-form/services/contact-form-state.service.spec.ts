import { TestBed } from '@angular/core/testing';

import { ContactFormStateService } from './contact-form-state.service';

describe('ContactFormStateService', () => {
  let service: ContactFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
