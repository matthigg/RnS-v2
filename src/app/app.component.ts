import { Component, ViewChild } from '@angular/core';

// Angular Material
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rns-v2';
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  close() {
    this.sidenav.close();
  }
}
