import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LOCALE_ID } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

registerLocaleData(localePt, 'es-AR');

const routes: Routes = [
  { path: '', redirectTo: '/sobre-mi', pathMatch: 'full' }, // Redirección a la página principal
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./app/sobre-mi/sobre-mi.component').then((m) => m.SobreMiComponent),
  },
  {
    path: 'educacion',
    loadComponent: () =>
      import('./app/app-educacion/app-educacion.component').then((m) => m.AppEducacionComponent),
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./app/app-experiencias/app-experiencias.component').then((m) => m.AppExperienciasComponent),
  },
  {
    path: 'habilidades',
    loadComponent: () =>
      import('./app/app-habilidades/app-habilidades.component').then((m) => m.AppHabilidadesComponent),
  },
  { path: '**', redirectTo: '/sobre-mi' }, // Ruta por defecto
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      BrowserAnimationsModule,
      BrowserModule,
      HttpClientModule,
      MatProgressSpinnerModule,
      RouterModule
    ]),
    { provide: LOCALE_ID, useValue: 'es-AR' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['YYYY-MM-DD', 'DD-MM-YYYY'],
        },
        display: {
          dateInput: 'DD-MM-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'DD-MM-YYYY',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
}).catch((err) => console.error(err));
