import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SurfaceCleaningComponent } from './surface-cleaning.component';

describe('SurfaceCleaningComponent', () => {
  let component: SurfaceCleaningComponent;
  let fixture: ComponentFixture<SurfaceCleaningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
