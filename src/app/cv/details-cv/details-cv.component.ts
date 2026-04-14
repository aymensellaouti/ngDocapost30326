import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from '../../config/app-route.config';
import { DefaultImagePipe } from '../pipes/default-image-pipe';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    // Récupérer l'id ensuite chercher le cv qui a cet id (dans le cvService)
    const id = this.acr.snapshot.params['id'];
    // 1- Je trouve => je l'affiche
    this.cv.set(this.cvService.findCvById(id));
    // 2- Redirige vers la liste des cvs
    if (!this.cv()) this.router.navigate([APP_ROUTES.cv]);
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
