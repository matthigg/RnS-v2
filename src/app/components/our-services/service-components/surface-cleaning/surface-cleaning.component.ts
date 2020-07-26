import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { WindowSizeService } from '../../../../services/window-size.service';
import { WindowSize } from '../../../../shared/models/window-size';

@Component({
  selector: 'app-surface-cleaning',
  templateUrl: './surface-cleaning.component.html',
  styleUrls: [
    './surface-cleaning.component.scss',
    '../shared/shared-services-styles.scss',
  ]
})
export class SurfaceCleaningComponent implements OnDestroy, OnInit {
  private subscriptions: Subscription = new Subscription();
  private windowSize: WindowSize | null = null;

  constructor(private windowSizeService: WindowSizeService) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(
      response => this.windowSize = response
    ));
  }
}
