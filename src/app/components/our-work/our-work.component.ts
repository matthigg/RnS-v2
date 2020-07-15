import { Component, OnInit } from '@angular/core';

// Models, Services
import { ImageUrls } from '../../shared/models/image-urls';
import { OurWorkStateService } from './services/our-work-state.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  Object = Object;
  rootImageURL: string = 'https://rns-static-and-media-files.s3.amazonaws.com/media/images/';
  imageURLs: ImageUrls;

  constructor(private ourWorkStateService: OurWorkStateService) { }

  ngOnInit(): void {
    this.imageURLs = this.ourWorkStateService.fetchImageURLs();
  }

}
