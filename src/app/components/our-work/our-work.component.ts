import { Component, OnInit } from '@angular/core';

// Environment Variables, Models, Services
import { environment } from '../../../environments/environment';
import { ImageUrls } from '../../shared/models/image-urls';
import { OurWorkStateService } from './services/our-work-state.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  Object = Object;
  rootImageURL: string = environment.rootImageURL;
  imageURLs: ImageUrls;

  constructor(private ourWorkStateService: OurWorkStateService) { }

  ngOnInit(): void {
    this.imageURLs = this.ourWorkStateService.fetchImageURLs();
  }

}
