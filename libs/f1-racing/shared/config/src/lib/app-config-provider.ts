import { Provider } from '@angular/core';
import { AppConfig } from './app-config.interface';
import { APP_CONFIG } from './app-config.token';

export function provideAppConfig(appConfig: AppConfig): Provider {
  return {
    provide: APP_CONFIG,
    useValue: appConfig,
  };
}
