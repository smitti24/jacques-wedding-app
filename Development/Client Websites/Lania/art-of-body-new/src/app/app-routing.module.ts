import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'prefix'
  },
  {
    path: 'home', component: AppComponent
  }
];
