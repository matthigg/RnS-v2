import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';

// RxJS
import { Subscription } from 'rxjs';

// Services
import { StateService } from './services/state.service';

// Custom Form Validator
function servicesValidator(formControl: FormControl) : ValidationErrors | null {
  return formControl.value.length === 0 ? { 'noSelectedService': true } : null;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnDestroy, OnInit {
  servicesFormControlError: null | { noSelectedService: boolean } = null;
  private subscriptions: Subscription = new Subscription()

  // Reactive Form
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: '',
    numberOfStories: ['', Validators.required],
    typeOfExterior: ['', Validators.required],
    sqFtInput: '',
    sqFtSelect: '',
    services: ['', servicesValidator],
    message: '',
  });
  // contactForm = this.fb.group({
  //   name: ['', Validators.required],
  //   email: '',
  //   phone: '',
  //   numberOfStories: '',
  //   typeOfExterior: '',
  //   sqFtInput: '',
  //   sqFtSelect: '',
  //   services: ['', servicesValidator],
  //   message: '',
  // });
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get numberOfStories() { return this.contactForm.get('numberOfStories'); }
  get typeOfExterior() { return this.contactForm.get('typeOfExterior'); }
  get sqFtInput() { return this.contactForm.get('sqFtInput'); }
  get sqFtSelect() { return this.contactForm.get('sqFtSelect'); }
  get svcFenceCleaning() { return this.contactForm.get('svcFenceCleaning'); }
  get svcSurfaceCleaning() { return this.contactForm.get('svcSurfaceCleaning'); }
  get svcSoftWash() { return this.contactForm.get('svcSoftWash'); }
  get svcStainRemoval() { return this.contactForm.get('svcStainRemoval'); }
  get svcDeckCleaning() { return this.contactForm.get('svcDeckCleaning'); }
  get message() { return this.contactForm.get('message'); }

  constructor(
    private stateService: StateService,
    private fb: FormBuilder,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.stateService.servicesFormControlError
      .subscribe(response => this.servicesFormControlError = response));
  }

  onClickService(): void {
    setTimeout(_ => {
      this.stateService.servicesFormControlError.next(this.contactForm.controls.services.errors);
    });
  }

  onSubmit(): void {
    console.log('--- contactForm:', this.contactForm);
  }
}
