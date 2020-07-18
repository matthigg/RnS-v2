import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Components
import { PictureDialogComponent } from './dialog/picture-dialog/picture-dialog.component';

// Environment Variables, Models, Services
import { environment } from 'src/environments/environment';
import { ImageUrls } from '../../shared/models/image-urls';
import { PictureDialogImage } from '../../shared/models/picture-dialog-image';
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

  constructor(
    public dialog: MatDialog,
    private ourWorkStateService: OurWorkStateService
  ) { }

  ngOnInit(): void {
    this.imageURLs = this.ourWorkStateService.fetchImageURLs();
  }

  onClickPicturePair(before: string, after: string) {
    this.openDialog({
      before,
      after,
      single: null,
    });
  }

  onClickPictureSingle(single: string) {
    this.openDialog({
      before: null,
      after: null,
      single,
    });
  }

  openDialog(data: PictureDialogImage): void {
    const dialogRef = this.dialog.open(PictureDialogComponent, { data });
  }
}
