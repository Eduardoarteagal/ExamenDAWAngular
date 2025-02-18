import { Routes } from '@angular/router';
import { CuadrosComponent } from './shared/cuadros/cuadros.component';
import { TablaComponent } from './shared/tabla/tabla.component';

export const routes: Routes = [
  { path: '', component: CuadrosComponent },
  { path: 'table', component: TablaComponent },
  { path: '**', redirectTo: '' }
];