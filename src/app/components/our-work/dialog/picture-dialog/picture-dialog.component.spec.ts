import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PictureDialogComponent } from './picture-dialog.component';

describe('PictureDialogComponent', () => {
  let component: PictureDialogComponent;
  let fixture: ComponentFixture<PictureDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
