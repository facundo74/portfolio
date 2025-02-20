import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter  } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
registerLocaleData(localePt, 'es-AR');

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom([
            BrowserAnimationsModule,
            BrowserModule,
            HttpClientModule,
            MatProgressSpinnerModule,
            MatButtonModule,
        ]),
        { provide: LOCALE_ID, useValue: 'es-AR' },
        { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: [
                        'YYYY-MM-DD', // from
                        'DD-MM-YYYY', // to
                    ],
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
