import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvCard],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvPage {
  // State de la page
  /**
   * @var la liste des cvs
   */
  cvs = signal<Cv[]>([
    new Cv(1, 'Acosta Matuz', 'Rene Ivan', 'Dev', '12345678', 'rotating_card_profile2.png', 20),
    new Cv(2, 'Lim', 'SIU MUONG', 'Dev', '12345676', 'rotating_card_profile3.png', 20),
    new Cv(3, 'Zelmat', 'Mohamed', 'Dev', '12345677', 'rotating_card_profile2.png', 20),
    new Cv(4, 'Zitouni', 'Aymen', 'Dev', '12345679', 'rotating_card_profile3.png', 20),
  ]);

  /**
   * @var représente le cv sélectionné
   */
  selectedCv = signal<Cv | null>(null);

  getSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
