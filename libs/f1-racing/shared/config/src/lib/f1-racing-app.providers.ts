import {
  EnvironmentProviders,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { en_GB, NZ_I18N } from 'ng-zorro-antd/i18n';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '@sports-hub/shared-config';
import { f1RacingAppRoutes } from '@sports-hub/f1-racing/shell';
import { provideStore } from '@ngrx/store';

export const f1RacingAppProvider: Array<Provider | EnvironmentProviders> = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(f1RacingAppRoutes, withComponentInputBinding()),
  provideHttpClient(),
  provideAnimations(),
  {
    provide: NZ_I18N,
    useValue: en_GB,
  },
  provideTransloco({
    config: {
      availableLangs: ['en'],
      defaultLang: 'en',
      failedRetries: 0,
    },
    loader: TranslocoHttpLoader,
  }),
  provideStore(),
];
