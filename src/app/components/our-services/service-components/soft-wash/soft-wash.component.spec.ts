import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SoftWashComponent } from './soft-wash.component';

describe('SoftWashComponent', () => {
  let component: SoftWashComponent;
  let fixture: ComponentFixture<SoftWashComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
