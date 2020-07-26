import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { BusinessInformationService } from '../../services/business-information.service';
import { WindowSizeService } from '../../services/window-size.service';
import { WindowSize } from '../../shared/models/window-size';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../../shared/shared-services-styles.scss',
  ]
})
export class ContactComponent implements OnDestroy, OnInit {
  city: string = this.businessInformationService.city;
  phoneNumber: string = this.businessInformationService.phoneNumber;
  state: string = this.businessInformationService.state;
  private subscriptions: Subscription = new Subscription();
  private windowSize: WindowSize | null = null;

  constructor(
    public businessInformationService: BusinessInformationService,
    private windowSizeService: WindowSizeService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(
      response => this.windowSize = response
    ));
  }
}
