import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  imports: [],
  templateUrl: './ngstyle.html',
  styleUrl: './ngstyle.css',
})
export class Ngstyle {
  color = signal('red');
  bgc = signal('yellow');
  size = signal(75);
}
