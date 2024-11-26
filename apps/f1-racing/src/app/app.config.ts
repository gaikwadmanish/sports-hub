import { ApplicationConfig } from '@angular/core';
import {
  f1RacingAppProvider,
  provideAppConfig,
} from '@sports-hub/f1-racing/shared-config';
import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [...f1RacingAppProvider, provideAppConfig(environment)],
};
