import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackViewsService {
  hasBeenViewed: Set<string> = new Set();

  constructor() { }
}
