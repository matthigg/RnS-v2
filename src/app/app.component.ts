import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

// Angular Material
import { MatSidenav } from '@angular/material/sidenav';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { WindowSizeService } from './services/window-size.service';
import { WindowSize } from './shared/models/window-size';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  fadeInBackgroundImage: boolean = false;
  windowSize: WindowSize | null = null;
  @ViewChild('sidenav') sidenav: MatSidenav;
  private subscriptions: Subscription = new Subscription();

  constructor(private windowSizeService: WindowSizeService) { }

  ngAfterViewInit() {
    setTimeout(_ => { this.fadeInBackgroundImage = true });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(
      response => this.windowSize = response
    ));
  }

  close(): void {
    this.sidenav.close();
  }

  onClickNavLink(): void {
    this.sidenav.close();
  }

  open(): void {
    this.sidenav.open();
  }
}
