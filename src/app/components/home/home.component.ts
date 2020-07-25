import { Component, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Services
import { BusinessInformationService } from '../../services/business-information.service';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../our-services/service-components/shared/shared-services-styles.scss',
  ]
})
export class HomeComponent implements OnInit {
  address: string = this.businessInformationService.address;
  businessHours: string = this.businessInformationService.businessHours;
  city: string = this.businessInformationService.city;
  email: string = this.businessInformationService.email;
  phoneNumber: string = this.businessInformationService.phoneNumber;
  state: string = this.businessInformationService.state;
  zipcode: string = this.businessInformationService.zipcode;
  window = window;
  private subscriptions: Subscription = new Subscription();
  private windowSize = null;

  constructor(
    public businessInformationService: BusinessInformationService,
    private windowSizeService: WindowSizeService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(response => this.windowSize = response));
  }

}
