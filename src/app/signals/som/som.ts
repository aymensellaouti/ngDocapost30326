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
  names = signal(['mahamed', 'rene', 'Siu']);
  namesLength = computed(() => this.names().length)
  doubleZ = computed(() => {
    console.log('Je calcule doubleZ');

    return this.z() * 2;
  });
  addName() {
    this.names.update(
      (myNames) => [...myNames, 'aymen']
    )
  }
}
