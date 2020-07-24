import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  googleMapsSRC: string = 'https://www.google.com/maps/d/embed?mid=1M99_6FQvTVBMWYAtWUuxLdrTQzM&hl=en&z=9';

  constructor() { }

  ngOnInit(): void {
  }

  onScrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
