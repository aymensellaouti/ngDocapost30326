import { Component, signal } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv = signal<Cv|null>(null);
  // Récupérer l'id ensuite chercher le cv qui a cet id (dans le cvService)
  // 1- Je trouve => je l'affiche
  // 2- Redirige vers la liste des cvs
  constructor() {}
}
