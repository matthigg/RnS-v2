import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConcreteCleaningComponent } from './concrete-cleaning.component';

describe('ConcreteCleaningComponent', () => {
  let component: ConcreteCleaningComponent;
  let fixture: ComponentFixture<ConcreteCleaningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
