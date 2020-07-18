import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Environment Variables, Models
import { environment } from 'src/environments/environment';
import { PictureDialogImage } from 'src/app/shared/models/picture-dialog-image';

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
  styleUrls: ['./picture-dialog.component.scss']
})
export class PictureDialogComponent implements OnInit {
  rootImageURL: string = environment.rootImageURL;

  constructor(
    public dialogRef: MatDialogRef<PictureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PictureDialogImage,
  ) { }

  ngOnInit(): void {
    console.log("--- data:", this.data)
  }

}
