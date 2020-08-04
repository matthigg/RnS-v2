import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form-stepper',
  templateUrl: './contact-form-stepper.component.html',
  styleUrls: ['./contact-form-stepper.component.scss']
})
export class ContactFormStepperComponent implements OnInit {

  // Reactive Form, Step 1
  formGroupStep1: FormGroup;
  get name() { return this.formGroupStep1.get('name'); }
  get email() { return this.formGroupStep1.get('email'); }
  get phone() { return this.formGroupStep1.get('phone'); }
  get numberOfStories() { return this.formGroupStep1.get('numberOfStories'); }
  get typeOfExterior() { return this.formGroupStep1.get('typeOfExterior'); }
  get sqft() { return this.formGroupStep1.get('sqft'); }

  // Reactive Form, Step 2
  formGroupStep2: FormGroup;
  get svcFenceCleaning() { return this.formGroupStep2.get('svcFenceCleaning'); }
  get svcSurfaceCleaning() { return this.formGroupStep2.get('svcSurfaceCleaning'); }
  get svcSoftWash() { return this.formGroupStep2.get('svcSoftWash'); }
  get svcStainRemoval() { return this.formGroupStep2.get('svcStainRemoval'); }
  get svcDeckCleaning() { return this.formGroupStep2.get('svcDeckCleaning'); }
  get message() { return this.formGroupStep2.get('message'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formGroupStep1 = this.fb.group({
      name: '',
      email: '',
      phone: '',
      numberOfStories: '',
      typeOfExterior: '',
      sqft: '',
    });

    this.formGroupStep2 = this.fb.group({
      services: '',
      message: '',
    })
  }

}
