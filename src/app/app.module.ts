// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeckCleaningAndRestorationComponent } from './components/our-services/service-components/deck-cleaning-and-restoration/deck-cleaning-and-restoration.component';
import { FenceCleaningComponent } from './components/our-services/service-components/fence-cleaning/fence-cleaning.component';
import { HomeComponent } from './components/home/home.component';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OutdoorStainRemovalComponent } from './components/our-services/service-components/outdoor-stain-removal/outdoor-stain-removal.component';
import { ServiceComponentsComponent } from './components/our-services/service-components/service-components.component';
import { ServicesComponent } from './components/our-services/services.component';
import { SoftWashComponent } from './components/our-services/service-components/soft-wash/soft-wash.component';
import { SvgSpriteSheetComponent } from './components/svg-sprite-sheet/svg-sprite-sheet.component';
import { SurfaceCleaningComponent } from './components/our-services/service-components/surface-cleaning/surface-cleaning.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    DeckCleaningAndRestorationComponent,
    FenceCleaningComponent,
    HomeComponent,
    NavToolbarComponent,
    OurWorkComponent,
    OutdoorStainRemovalComponent,
    ServiceComponentsComponent,
    ServicesComponent,
    SoftWashComponent,
    SvgSpriteSheetComponent,
    SurfaceCleaningComponent,
    ContactFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
