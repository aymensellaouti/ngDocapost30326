import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  // State :  L'état
  name = "aymen";
  /**
   * var qui gére l'affichage
   * ou non d'un élément
   */
  isHidden = false;
  message = "";
  // Behavior : Comportement
  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
