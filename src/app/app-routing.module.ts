// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FenceCleaningComponent } from './components/our-services/service-components/fence-cleaning/fence-cleaning.component';
import { SurfaceCleaningComponent } from './components/our-services/service-components/surface-cleaning/surface-cleaning.component';
import { SoftWashComponent } from './components/our-services/service-components/soft-wash/soft-wash.component';
import { OutdoorStainRemovalComponent } from './components/our-services/service-components/outdoor-stain-removal/outdoor-stain-removal.component';
import { DeckCleaningAndRestorationComponent } from './components/our-services/service-components/deck-cleaning-and-restoration/deck-cleaning-and-restoration.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: 'about',      component: AboutComponent },
  { path: 'services',   component: ServicesComponent },
  { path: 'services/fence-cleaning',                component: FenceCleaningComponent },
  { path: 'services/surface-cleaning',              component: SurfaceCleaningComponent },
  { path: 'services/soft-wash',                     component: SoftWashComponent },
  { path: 'services/outdoor-stain-removal',         component: OutdoorStainRemovalComponent },
  { path: 'services/deck-cleaning-and-restoration', component: DeckCleaningAndRestorationComponent },
  { path: 'our-work',   component: OurWorkComponent },
  { path: 'contact',    component: ContactComponent },
  { path: 'thank-you',  component: ThankYouComponent },
  { path: '',           component: HomeComponent },
  { path: '**',         component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
