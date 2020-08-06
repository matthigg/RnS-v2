import { Component, OnInit } from '@angular/core';

// Services
import { BusinessInformationService } from 'src/app/services/business-information.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  phoneNumber: string = this.businessInformationService.phoneNumber;

  constructor(public businessInformationService: BusinessInformationService) { }

  ngOnInit(): void {
  }

}
