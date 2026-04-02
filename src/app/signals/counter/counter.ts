import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal<number>(0);

  reset() {
    this.counter.set(0);
  }

  increment() {
    this.counter.update(
      (valeurActuelleDuSignal) => valeurActuelleDuSignal + 1
    )
  }
}
