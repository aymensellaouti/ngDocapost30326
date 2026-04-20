import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger.service';
import { HelloService } from './services/hello.service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth-interceptor';
import { Logger2Service } from './services/logger2.service';
import { CvService } from './cv/services/cv.service';
import { APP_CONST } from './config/constantes.config';
import { FakeCvService } from './cv/services/fake-cv.service';
import { LOGGERS_INJECTION_TOKEN } from './injection tokens/loggers.inject-token';
import { Logger3Service } from './services/logger3.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    {provide: LOGGERS_INJECTION_TOKEN, useClass: LoggerService, multi: true},
    {provide: LOGGERS_INJECTION_TOKEN, useClass: Logger2Service, multi: true},
    {provide: LOGGERS_INJECTION_TOKEN, useClass: Logger3Service, multi: true},
    {provide: CvService, useClass: APP_CONST.env == 'dev' ? FakeCvService: CvService},
    // Quand on te demandera un LoggerService, fournit une instance de Logger2Service
    {provide: LoggerService, useClass: Logger2Service},
    // Quand on te demandera un LoggerService, fournit une instance de LoggerService
    {provide: LoggerService, useClass: LoggerService},
    //HelloService
    // // Meme si je n'avais pas utilisé le service il sera instancié et il sera dans le build final
    // LoggerService
  ],
};
