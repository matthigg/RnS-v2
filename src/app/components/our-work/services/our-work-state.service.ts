import { Injectable } from '@angular/core';

// Models
import { ImageUrls } from '../../../shared/models/image-urls';

@Injectable({
  providedIn: 'root'
})
export class OurWorkStateService {

  constructor() { }

  fetchImageURLs(): ImageUrls {
    return {
      'Houses': [
        { before: '20190603_071305.jpg', after: '20190603_092205.jpg' },
        { before: '20190614_160346.jpg', after: '20190614_181218.jpg' },
        { before: 'ba-house-05-before.jpg', after: 'ba-house-05-after.jpg' },
        { before: 'ba-house-08-before.jpg', after: 'ba-house-08-after.jpg' },
        { before: 'ba-house-09-before.jpg', after: 'ba-house-09-after.jpg' },
        { before: 'ba-house-06-before.jpg', after: 'ba-house-06-after.jpg' },
        { before: 'ba-house-07-before.jpg', after: 'ba-house-07-after.jpg' },
        { before: 'ba-house-12-before.jpg', after: 'ba-house-12-after.jpg' },
        { before: 'ba-house-13-before.jpg', after: 'ba-house-13-after.jpg' },
      ],
      'Wood Restoring': [
        { before: 'ba-wood-restoring-01-before.jpg', after: 'ba-wood-restoring-01-after.jpg' },
        { before: 'ba-wood-restoring-02-before.jpg', after: 'ba-wood-restoring-02-after.jpg' },
        { before: 'ba-wood-restoring-03-before.jpg', after: 'ba-wood-restoring-03-after.jpg' },
        { before: 'ba-walkway-01-before.jpg', after: 'ba-walkway-01-after.jpg' },
        { before: 'ba-stairs-03-before.jpg', after: 'ba-stairs-03-after.jpg' },
      ],
      'Oxidation Removal': [
        { before: 'ba-oxidation-removal-01-before.jpg', after: 'ba-oxidation-removal-01-after.jpg' },
      ],
      'Stain Removal': [
        { before: '20190629_1213491.jpg', after: '20190629_1540031.jpg' },
      ],
      'Other Images': [
        { before: 'ba-driveway-01-before.jpg', after: 'ba-driveway-01-after.jpg' },
        { before: 'ba-patio-01-before.jpg', after: 'ba-patio-01-after.jpg' },
        { before: 'ba-sidewalk-03-before.jpg', after: 'ba-sidewalk-03-after.jpg' },
        { single: 'house-11.jpg' },
        { single: 'porch-02.jpg' },
        { single: 'sidewalk-02.jpg' },
        { single: 'walkway-02.jpg' },
      ]
    }
  }
}
