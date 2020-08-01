import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';

// RxJS
import { Subscription } from 'rxjs';

// Environment Variables, Services
import { ContactFormStateService } from './services/contact-form-state.service';
import { SendDataService } from './services/send-data.service';

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
  private subscriptions: Subscription = new Subscription();

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
    private contactFormStateService: ContactFormStateService,
    private fb: FormBuilder,
    private sendDataService: SendDataService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.contactFormStateService.servicesFormControlError
      .subscribe(response => this.servicesFormControlError = response));
  }

  onClickService(): void {
    setTimeout(_ => {
      this.contactFormStateService.servicesFormControlError.next(this.contactForm.controls.services.errors);
    });
  }

  onSubmit(): void {
    this.subscriptions.add(this.sendDataService.sendData(this.contactForm.value).subscribe(
      response => {
        console.log('--- response:', response)
      },
      error => {
        console.log('--- error:', error)
      }
    ));
  }
}
