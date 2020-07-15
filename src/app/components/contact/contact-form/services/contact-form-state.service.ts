import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormStateService {
  servicesFormControlError = new BehaviorSubject(null);

  constructor() { }
}
