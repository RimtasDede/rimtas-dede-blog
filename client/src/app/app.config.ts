import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { HeaderModule } from './header/header.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(LayoutModule, HeaderModule),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideClientHydration(withEventReplay())
  ]
};
