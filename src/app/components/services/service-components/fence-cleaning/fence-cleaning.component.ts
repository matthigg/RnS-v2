import { Component, OnInit } from '@angular/core';

// Services
import { BusinessInformationService } from '../../../../services/business-information.service';

@Component({
  selector: 'app-fence-cleaning',
  templateUrl: './fence-cleaning.component.html',
  styleUrls: ['./fence-cleaning.component.scss']
})
export class FenceCleaningComponent implements OnInit {
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
