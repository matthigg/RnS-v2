import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvgSpriteSheetComponent } from './svg-sprite-sheet.component';

describe('SvgSpriteSheetComponent', () => {
  let component: SvgSpriteSheetComponent;
  let fixture: ComponentFixture<SvgSpriteSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgSpriteSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSpriteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
