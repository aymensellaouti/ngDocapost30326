import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';


@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees = signal<Cv[]>([]);

  getEmbauchees(): Signal<Cv[]> {
    return this.#embauchees.asReadonly();
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    return false;
  }
}
