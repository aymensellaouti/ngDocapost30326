import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_API } from '../../config/app-api.config';
import { Credentials } from '../dto/credentials.dto';
import { LoginResonse } from '../dto/login-response.dto';
import { Observable } from 'rxjs';
import { APP_CONST } from '../../config/constantes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(credentials: Credentials): Observable<LoginResonse> {
    return this.http.post<LoginResonse>(APP_API.login, credentials);
  }

  logout() {
    localStorage.removeItem(APP_CONST.authToken);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONST.authToken);
  }
}
