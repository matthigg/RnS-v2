import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { PageOffset } from '../../shared/models/page-offset';
import { WindowScrollPositionService } from '../../services/window-scroll-position.service';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnDestroy, OnInit {
  pageOffset: PageOffset | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private windowScrollPositionService: WindowScrollPositionService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.windowScrollPositionService.pageOffset.subscribe(
      response => this.pageOffset = response
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
