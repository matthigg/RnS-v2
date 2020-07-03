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
import { HomeComponent } from './components/home/home.component';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import { ServiceCardsComponent } from './components/services/service-cards/service-cards.component';
import { ServicesComponent } from './components/services/services.component';
import { SvgSpriteSheetComponent } from './components/svg-sprite-sheet/svg-sprite-sheet.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { FenceCleaningComponent } from './components/services/service-components/fence-cleaning/fence-cleaning.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavToolbarComponent,
    ServiceCardsComponent,
    ServicesComponent,
    SvgSpriteSheetComponent,
    OurWorkComponent,
    FenceCleaningComponent,
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
