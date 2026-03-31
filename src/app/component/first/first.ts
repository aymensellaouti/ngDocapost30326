import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  // State
  name = "aymen";
  /**
   * var qui gére l'affichage
   * ou non d'un élément
   */
  isHidden = false;

  // Comportement
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
