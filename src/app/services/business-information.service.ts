import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessInformationService {
  address: string = '505 Compass Ct.';
  businessHours: string = 'Hours Vary';
  city: string = 'Sneads Ferry';
  email: string = 'jmfroio10@gmail.com';
  phoneNumber: string = '(602) 301-2584';
  state: string = 'NC';
  zipcode: string = '28460';

  constructor() { }
}
