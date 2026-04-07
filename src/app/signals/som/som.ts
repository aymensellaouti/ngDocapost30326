import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.html',
  styleUrl: './som.css',
})
export class Som {
  x = signal(4);
  y = signal(8);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => {
    console.log('Je calcule doubleZ');

    return this.z() * 2;
  });
  names = signal(['mahamed', 'rene', 'Siu']);
  namesLength = computed(() => this.names().length)
  addName() {
    this.names.update(
      (myNames) => [...myNames, 'aymen']
    )
  }
}
