import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorStainRemovalComponent } from './outdoor-stain-removal.component';

describe('OutdoorStainRemovalComponent', () => {
  let component: OutdoorStainRemovalComponent;
  let fixture: ComponentFixture<OutdoorStainRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorStainRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorStainRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
