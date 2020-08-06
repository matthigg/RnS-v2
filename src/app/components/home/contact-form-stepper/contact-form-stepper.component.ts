import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

// RxJS
import { BehaviorSubject, Subscription } from 'rxjs';

// Environment Variables, Services
import { ContactFormData } from 'src/app/shared/models/contact-form-data';
import { environment } from 'src/environments/environment';
import { SendDataService } from 'src/app/services/send-data.service';

// Custom Form Validator
export default function servicesValidator(formControl: FormControl) : ValidationErrors | null {
  return formControl.value.length === 0 ? { 'noSelectedService': true } : null;
}

@Component({
  selector: 'app-contact-form-stepper',
  templateUrl: './contact-form-stepper.component.html',
  styleUrls: ['./contact-form-stepper.component.scss']
})
export class ContactFormStepperComponent implements OnInit {
  servicesFormControlError: BehaviorSubject<ValidationErrors | null> = new BehaviorSubject(null);
  private _subscriptions: Subscription = new Subscription();

  // Reactive Form, Step 1
  formGroupStep1: FormGroup;
  get name()            { return this.formGroupStep1.get('name'); }
  get email()           { return this.formGroupStep1.get('email'); }
  get phone()           { return this.formGroupStep1.get('phone'); }
  get address()         { return this.formGroupStep1.get('address'); }
  get numberOfStories() { return this.formGroupStep1.get('numberOfStories'); }
  get typeOfExterior()  { return this.formGroupStep1.get('typeOfExterior'); }

  // Reactive Form, Step 2
  formGroupStep2: FormGroup;
  get services()  { return this.formGroupStep2.get('services'); }
  get message()   { return this.formGroupStep2.get('message'); }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sendDataService: SendDataService,
  ) { }

  ngOnInit(): void {

    this.formGroupStep1 = this.fb.group({
      name:             ['', Validators.required],
      email:            ['', [Validators.required, Validators.email]],
      phone:            '',
      address:          '',
      numberOfStories:  ['', Validators.required],
      typeOfExterior:   ['', Validators.required],
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
    let requestPayload: ContactFormData | {} = {};
    Object.assign(requestPayload, this.formGroupStep1.value);
    Object.assign(requestPayload, this.formGroupStep2.value);
    this._subscriptions.add(this.sendDataService.sendData((requestPayload as ContactFormData)).subscribe(
      response => {
        !environment.production ? console.log('--- Contact Form API Response:', response) : null;
        this.router.navigate(['thank-you']);
      },
      error => !environment.production ? console.log('--- Contact Form API Error:', error) : null
    ));
  }
}