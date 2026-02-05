import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OrthophotoComponent } from './orthophoto/orthophoto';
import { NdviComponent } from './ndvi/ndvi';
import { SurfaceModelsComponent } from './surface-models/surface-models';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [{ path: '', component: LandingComponent },
  { path: 'orthophoto', component: OrthophotoComponent },
  { path: 'ndvi', component: NdviComponent },
  { path: 'surface-models', component: SurfaceModelsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }];
