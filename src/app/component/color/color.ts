import { Component } from '@angular/core';

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
  color = this.defaultColor;

  // Behaviour
  /**
   * Elle change la couleur
   * @param newColor : la nouvelle couleur
   */
  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
