import { Component, OnInit } from '@angular/core';

// Services
import { BusinessInformationService } from '../../../../services/business-information.service';

@Component({
  selector: 'app-surface-cleaning',
  templateUrl: './surface-cleaning.component.html',
  styleUrls: [
    './surface-cleaning.component.scss',
    '../shared/shared-services-styles.scss',
  ]
})
export class SurfaceCleaningComponent implements OnInit {
  address: string = this.businessInformationService.address;
  businessHours: string = this.businessInformationService.businessHours;
  city: string = this.businessInformationService.city;
  email: string = this.businessInformationService.email;
  phoneNumber: string = this.businessInformationService.phoneNumber;
  state: string = this.businessInformationService.state;
  zipcode: string = this.businessInformationService.zipcode;

  constructor(public businessInformationService: BusinessInformationService) { }

  ngOnInit(): void {
  }

}
