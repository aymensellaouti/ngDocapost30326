import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {

  /**
   * @var la couleur par défaut
   */
  private defaultColor = 'red';

  /**
   * @var La couleur de ma div
   */
  color = signal(this.defaultColor);

  // Behaviour
  /**
   * Elle change la couleur
   * @param newColor : la nouvelle couleur
   */
  changeColor(newColor: HTMLInputElement) {
    this.color.set(newColor.value);
    newColor.value = '';
  }

  /**
   * Reset la couleur du background de la div
   */
  reset() {
    this.color.set(this.defaultColor);
  }
}
