import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Credentials } from '../dto/credentials.dto';
import { APP_CONST } from '../../config/constantes.config';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-route.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Merci de vérifier vos credentials')
      }
    })
  }
}
