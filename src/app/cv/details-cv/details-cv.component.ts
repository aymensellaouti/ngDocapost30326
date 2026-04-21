import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from '../../config/app-route.config';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  cvService = inject(CvService);
  authService = inject(AuthService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  toast = inject(ToastrService);
  constructor() {
    // Récupérer l'id ensuite chercher le cv qui a cet id (dans le cvService)
    //const id = this.acr.snapshot.params['id'];
    // 1- Je trouve => je l'affiche
    //this.cv.set(this.cvService.findCvById(id));
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => this.cv.set(cv),
    //   error: (e) => this.router.navigate([APP_ROUTES.cv]),
    // });
    // 2- Redirige vers la liste des cvs
    //if (!this.cv()) this.router.navigate([APP_ROUTES.cv]);
    this.cv.set(this.acr.snapshot.data['cv']);
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error:(e) => {
          this.toast.error("Il y a un problème merci de contacter l'admin");
          console.log(e);
        }
      });
    }
  }
}
