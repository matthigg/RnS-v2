import { Injectable, OnDestroy } from '@angular/core';

// RxJS
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

// Models
import { WindowSize } from '../shared/models/window-size';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService implements OnDestroy {
  windowSize: BehaviorSubject<WindowSize> = new BehaviorSubject<WindowSize>({ 
    height: window.innerHeight, 
    width: window.innerWidth 
  });
  private subscriptions: Subscription = new Subscription();

  constructor() {
    this.subscriptions.add(fromEvent(window, 'resize')
      .pipe(
        auditTime(100),
        map(event => { 
          return {
            height: (event.currentTarget as Window).innerHeight,
            width: (event.currentTarget as Window).innerWidth
          } 
        }),
      )
      .subscribe(windowDimensions => {
        this.windowSize.next(windowDimensions);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
