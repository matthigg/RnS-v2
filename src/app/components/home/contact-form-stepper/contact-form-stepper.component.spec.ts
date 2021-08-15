import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactFormStepperComponent } from './contact-form-stepper.component';

describe('ContactFormStepperComponent', () => {
  let component: ContactFormStepperComponent;
  let fixture: ComponentFixture<ContactFormStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
