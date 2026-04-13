import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger.service';
import { HelloService } from './services/hello.service';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    LoggerService,
    //HelloService
    // // Meme si je n'avais pas utilisé le service il sera instancié et il sera dans le build final
    // LoggerService
  ],
};
