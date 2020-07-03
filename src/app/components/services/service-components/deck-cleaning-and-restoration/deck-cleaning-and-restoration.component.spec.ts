import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCleaningAndRestorationComponent } from './deck-cleaning-and-restoration.component';

describe('DeckCleaningAndRestorationComponent', () => {
  let component: DeckCleaningAndRestorationComponent;
  let fixture: ComponentFixture<DeckCleaningAndRestorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckCleaningAndRestorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckCleaningAndRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
