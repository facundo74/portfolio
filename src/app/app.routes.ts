import { Routes } from '@angular/router';
import { AppHabilidadesComponent } from './app-habilidades/app-habilidades.component';
import { AppEducacionComponent } from './app-educacion/app-educacion.component';
import { AppExperienciasComponent } from './app-experiencias/app-experiencias.component';

export const routes: Routes = [
  { path: 'experiencia', component: AppExperienciasComponent },
  { path: 'educacion', component: AppEducacionComponent },
  { path: 'habilidades', component: AppHabilidadesComponent },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./sobre-mi/sobre-mi.component').then((m) => m.SobreMiComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
