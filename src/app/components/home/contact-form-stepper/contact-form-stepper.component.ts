import { AfterViewInit, Component, OnDestroy, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Animations
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  styleUrls: ['./contact-form-stepper.component.scss'],
  animations: [
    trigger('slideRight', [
      state('stationary', style({
        left: '-15rem',
        opacity: '0',
      })),
      state('slide-right', style({
        left: '-14rem',
        opacity: '1',
      })),
      transition('stationary => slide-right', [ animate('0.35s ease-in') ])
    ])
  ]
})
export class ContactFormStepperComponent implements AfterViewInit, OnDestroy, OnInit {
  servicesFormControlError: BehaviorSubject<ValidationErrors | null> = new BehaviorSubject(null);
  slideRight: boolean = false;
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

  ngAfterViewInit(): void {
    setTimeout(_ => this.slideRight = true);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {

    this.formGroupStep1 = this.fb.group({
      name:             ['', Validators.required],
      phone:            ['', Validators.required],
      address:          ['', Validators.required],
      email:            '',
      numberOfStories:  '',
      typeOfExterior:   '',
    });

    this.formGroupStep2 = this.fb.group({
      services: ['', servicesValidator],
      message:  '',
    });
  }

  onClickService(): void {
    this.slideRight = true;
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