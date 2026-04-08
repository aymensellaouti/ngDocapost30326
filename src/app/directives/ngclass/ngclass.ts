import { Component, signal } from '@angular/core';
import { Highlight } from "../highlight";

@Component({
  selector: 'app-ngclass',
  imports: [Highlight],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class Ngclass {
  /**
   * Permet de spécifier si la lampe est ouverte ou non
   */
  isOn = signal(false);
  interrupteur() {
    this.isOn.update(value => !value)
  }
}
