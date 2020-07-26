import { TestBed } from '@angular/core/testing';

import { WindowScrollPositionService } from './window-scroll-position.service';

describe('WindowScrollPositionService', () => {
  let service: WindowScrollPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowScrollPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
