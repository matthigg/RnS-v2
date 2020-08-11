// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { DeckCleaningAndRestorationComponent } from './components/our-services/service-components/deck-cleaning-and-restoration/deck-cleaning-and-restoration.component';
import { FenceCleaningComponent } from './components/our-services/service-components/fence-cleaning/fence-cleaning.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OutdoorStainRemovalComponent } from './components/our-services/service-components/outdoor-stain-removal/outdoor-stain-removal.component';
import { PictureDialogComponent } from './components/our-work/dialog/picture-dialog/picture-dialog.component';
import { ServiceComponentsComponent } from './components/our-services/service-components/service-components.component';
import { ServicesComponent } from './components/our-services/services.component';
import { SoftWashComponent } from './components/our-services/service-components/soft-wash/soft-wash.component';
import { SvgSpriteSheetComponent } from './components/svg-sprite-sheet/svg-sprite-sheet.component';
import { SurfaceCleaningComponent } from './components/our-services/service-components/surface-cleaning/surface-cleaning.component';

// Pipes
import { ConsoleLogPipe } from './shared/pipes/console-log.pipe';
import { ContactFormStepperComponent } from './components/home/contact-form-stepper/contact-form-stepper.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ConcreteCleaningComponent } from './components/our-services/service-components/concrete-cleaning/concrete-cleaning.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ConsoleLogPipe,
    ContactComponent,
    ContactFormComponent,
    ContactInfoComponent,
    DeckCleaningAndRestorationComponent,
    FenceCleaningComponent,
    FooterComponent,
    HomeComponent,
    NavToolbarComponent,
    OurWorkComponent,
    OutdoorStainRemovalComponent,
    PictureDialogComponent,
    ServiceComponentsComponent,
    ServicesComponent,
    SoftWashComponent,
    SvgSpriteSheetComponent,
    SurfaceCleaningComponent,
    ContactFormStepperComponent,
    ThankYouComponent,
    ConcreteCleaningComponent,
    MobileFooterComponent,
  ],
  entryComponents: [ PictureDialogComponent ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme')
  }
}
