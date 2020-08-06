import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Environment Variables, Models
import { ContactFormData } from '../../../../shared/models/contact-form-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  sendData(data: ContactFormData): Observable<any> {
    return this.http.post<any>(environment.contactFormAPI, data, this.httpOptions);
  }
}
