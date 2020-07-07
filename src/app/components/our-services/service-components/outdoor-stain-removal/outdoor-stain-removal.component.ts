import { Component, OnInit } from '@angular/core';

// Services
import { BusinessInformationService } from '../../../../services/business-information.service';

@Component({
  selector: 'app-outdoor-stain-removal',
  templateUrl: './outdoor-stain-removal.component.html',
  styleUrls: [
    './outdoor-stain-removal.component.scss',
    '../shared/shared-services-styles.scss',
  ]
})
export class OutdoorStainRemovalComponent implements OnInit {
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
