import {  inject, Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'Acosta Matuz', 'Rene Ivan', 'Dev', '12345678', 'rotating_card_profile2.png', 20),
    new Cv(2, 'Lim', 'SIU MUONG', 'Dev', '12345676', 'rotating_card_profile3.png', 20),
    new Cv(3, 'Zelmat', 'Mohamed', 'Dev', '12345677', 'rotating_card_profile2.png', 20),
    new Cv(4, 'Zitouni', 'Aymen', 'Dev', '12345679', '', 20),
    new Cv(5, 'Cohen', 'David', 'Dev', '12345680', '         ', 20),
  ]);
  #selectedCv = signal<Cv | null>(null);
  selectedCv$ = new Subject<Cv>();
  // --------------------------------------------------->
  http = inject(HttpClient);
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs() {
    return this.#cvs();
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  deleteCvById(id: number): Observable<{count: number}> {
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   * retourne le selected Cv
   * @returns selectedCv: Cv
   */
  getSelectedCv() {
    return this.#selectedCv.asReadonly();
  }

  /**
   * Permet de spécifier le cv qui a été sélectionné
   * @param cv : cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
    this.selectedCv$.next(cv);
  }
  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns void
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update((cvs) => cvs.filter((actualcv) => actualcv != cv));
  }
}
