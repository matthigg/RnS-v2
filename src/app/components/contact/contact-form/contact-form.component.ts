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
    email: ['', Validators.required],
    phone: ['', Validators.required],
    numberOfStories: ['', Validators.required],
    typeOfExterior: ['', Validators.required],
    squareFootageInput: ['', Validators.required],
    squareFootageSelect: ['', Validators.required],
    serviceFenceCleaning: ['', Validators.required],
    serviceSurfaceCleaning: ['', Validators.required],
    serviceSoftWash: ['', Validators.required],
    serviceOutdoorStainRemoval: ['', Validators.required],
    serviceDeckCleaningAndRestoration: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('--- contactForm:', this.contactForm)
  }

}
