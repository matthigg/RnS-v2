import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // Reactive Form
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.required],
    numberOfStories: ['', Validators.required],
    typeOfExterior: ['', Validators.required],
    squareFootageInput: ['', Validators.required],
    squareFootageSelect: ['', Validators.required],
    svcFenceCleaning: ['', Validators.required],
    svcSurfaceCleaning: ['', Validators.required],
    svcSoftWash: ['', Validators.required],
    svcStainRemoval: ['', Validators.required],
    svcDeckCleaning: ['', Validators.required],
    message: ['', Validators.required],
  });
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get numberOfStories() { return this.contactForm.get('numberOfStories'); }
  get typeOfExterior() { return this.contactForm.get('typeOfExterior'); }
  get squareFootageInput() { return this.contactForm.get('squareFootageInput'); }
  get squareFootageSelect() { return this.contactForm.get('squareFootageSelect'); }
  get svcFenceCleaning() { return this.contactForm.get('svcFenceCleaning'); }
  get svcSurfaceCleaning() { return this.contactForm.get('svcSurfaceCleaning'); }
  get svcSoftWash() { return this.contactForm.get('svcSoftWash'); }
  get svcStainRemoval() { return this.contactForm.get('svcStainRemoval'); }
  get svcDeckCleaning() { return this.contactForm.get('svcDeckCleaning'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('--- contactForm:', this.contactForm)
  }

}
