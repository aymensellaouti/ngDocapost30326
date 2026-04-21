import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { catchError, EMPTY } from 'rxjs';
import { APP_ROUTES } from '../../config/app-route.config';

export const detailsCvResolver: ResolveFn<Cv> = (route, state) => {
  const cvService = inject(CvService);
  const router = inject(Router);
  const id = route.params['id'];
  return cvService.getCvById(id).pipe(
    catchError(e => {
      router.navigate([APP_ROUTES.cv]);
      // Permet de retourner un flux vide
      return EMPTY;
    })
  );
};
