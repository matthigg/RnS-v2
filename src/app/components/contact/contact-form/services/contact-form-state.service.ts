import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormStateService {
  servicesFormGroupError = new BehaviorSubject(null);

  constructor() { }
}
