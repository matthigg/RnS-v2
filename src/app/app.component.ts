import { AfterViewInit, Component, ViewChild } from '@angular/core';

// Angular Material
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'rns-v2';
  fadeInBackgroundImage: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(_ => { this.fadeInBackgroundImage = true });
  }

  close(): void {
    this.sidenav.close();
  }
}
