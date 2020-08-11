import { Component, OnInit } from '@angular/core';

// Services
import { BusinessInformationService } from '../../services/business-information.service';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss']
})
export class MobileFooterComponent implements OnInit {
  phoneNumber: string = this.businessInformationService.phoneNumber;

  constructor(public businessInformationService: BusinessInformationService) { }

  ngOnInit(): void {
  }

}
