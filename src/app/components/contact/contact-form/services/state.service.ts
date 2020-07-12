import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  servicesFormGroupError = new BehaviorSubject(null);

  constructor() { }
}
