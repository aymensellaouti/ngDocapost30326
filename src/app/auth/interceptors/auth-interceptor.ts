import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
import { APP_CONST } from '../../config/constantes.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  // const headers = new HttpHeaders().set(
  //       APP_CONST.httpHeadersKey,
  //       localStorage.getItem(APP_CONST.authToken) ?? ''
  //     );
  if (authService.isAuthenticated()) {
    const cloneReq = req.clone({
      setHeaders: {
        [APP_CONST.httpHeadersKey]: localStorage.getItem(APP_CONST.authToken) ?? '',
      },
    });
    return next(cloneReq);
  }
  return next(req);
};
