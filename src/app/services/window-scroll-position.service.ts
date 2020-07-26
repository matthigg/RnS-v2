import { Injectable, OnDestroy } from '@angular/core';

// RxJS
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

// Models
import { PageOffset } from '../shared/models/page-offset';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollPositionService implements OnDestroy {
  pageOffset: BehaviorSubject<PageOffset> = new BehaviorSubject<PageOffset>({ 
    pageXOffset: window.pageXOffset,
    pageYOffset: window.pageYOffset
  });
  private subscriptions: Subscription = new Subscription();

  constructor() {
    this.subscriptions.add(fromEvent(window, 'scroll')
      .pipe(
        auditTime(100),
        map(_ => { 
          return {
            pageXOffset: window.pageXOffset,
            pageYOffset: window.pageYOffset
          } 
        }),
      )
      .subscribe(pageOffset => {
        this.pageOffset.next(pageOffset);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}