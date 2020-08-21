import { TestBed } from '@angular/core/testing';

import { TrackViewsService } from './track-views.service';

describe('TrackViewsService', () => {
  let service: TrackViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
