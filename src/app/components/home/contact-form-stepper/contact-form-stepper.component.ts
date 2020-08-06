import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';

// RxJS
import { BehaviorSubject } from 'rxjs';

// Custom Form Validator
export default function servicesValidator(formControl: FormControl) : { 'noSelectedService': true } | null {
  return formControl.value.length === 0 ? { 'noSelectedService': true } : null;
}

@Component({
  selector: 'app-contact-form-stepper',
  templateUrl: './contact-form-stepper.component.html',
  styleUrls: ['./contact-form-stepper.component.scss']
})
export class ContactFormStepperComponent implements OnInit {
  servicesFormControlError: BehaviorSubject<{ [noSelectedService: string]: any } | null> = new BehaviorSubject(null);

  // Reactive Form, Step 1
  formGroupStep1: FormGroup;
  get name()            { return this.formGroupStep1.get('name'); }
  get email()           { return this.formGroupStep1.get('email'); }
  get phone()           { return this.formGroupStep1.get('phone'); }
  get numberOfStories() { return this.formGroupStep1.get('numberOfStories'); }
  get typeOfExterior()  { return this.formGroupStep1.get('typeOfExterior'); }
  get sqft()            { return this.formGroupStep1.get('sqft'); }

  // Reactive Form, Step 2
  formGroupStep2: FormGroup;
  get services()  { return this.formGroupStep2.get('services'); }
  get message()   { return this.formGroupStep2.get('message'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formGroupStep1 = this.fb.group({
      name:             ['', Validators.required],
      email:            ['', [Validators.required, Validators.email]],
      phone:            '',
      numberOfStories:  ['', Validators.required],
      typeOfExterior:   ['', Validators.required],
      sqft:             '',
    });

    this.formGroupStep2 = this.fb.group({
      services: ['', servicesValidator],
      message:  '',
    });
  }

  onClickService(): void {
    setTimeout(_ => {
      this.servicesFormControlError.next(this.formGroupStep2.controls.services.errors);
    });
  }

  onSubmit(): void {
    console.log('--- this.formGroupStep1.value', this.formGroupStep1.value)
    console.log('--- this.formGroupStep2.value', this.formGroupStep2.value)
  }
}
