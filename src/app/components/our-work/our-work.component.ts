import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  rootImageURL: string = 'https://rns-static-and-media-files.s3.amazonaws.com/media/images/';

  imageURLs = {
    houses: [],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
