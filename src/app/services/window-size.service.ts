import { Injectable, Inject, OnDestroy } from '@angular/core';

// RxJS
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

export interface WindowSize {
  height: number,
  width: number
}

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService implements OnDestroy {
  windowSize = new BehaviorSubject(null);
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
