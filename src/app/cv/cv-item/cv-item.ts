import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  // C'est quoi mon état et pour pour chaque attribut est ce que
  // je l'expose a l'exterieur ou pas (est ce que c'est un input)
  cv = input.required<Cv>();
}
