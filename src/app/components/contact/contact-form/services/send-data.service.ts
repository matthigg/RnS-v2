import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Environment Variables
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  sendData(data: any): any {
    console.log('--- data:', data)
    return this.http.post<any>(environment.contactFormAPI, data, this.httpOptions);
  }
}
