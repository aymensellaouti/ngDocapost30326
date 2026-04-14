import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  template: `<div class="alert alert-info">
    Hello {{ name() }}
    <button (click)="goToCv()" class="btn btn-danger">Go To Cv</button>
  </div>`,
  styles: ``,
})
export class Second {
  name = signal('');
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    console.log(this.acr.snapshot.params);
    this.name.set(this.acr.snapshot.params['name']);
  }
  goToCv() {
    this.router.navigate(['cv']);
  }
}
