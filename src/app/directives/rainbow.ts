import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    '[style.color]': 'this.color()',
    '[style.borderColor]': 'this.color()',
    '(keyup)': 'this.onKeyUp()',
  },
})
export class Rainbow {
  color = signal('black');
  constructor() {
    console.log('Rainbow');
  }
  onKeyUp() {
    this.color.set(this.getRandomColor());
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  }
}
