// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'contact',  component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
