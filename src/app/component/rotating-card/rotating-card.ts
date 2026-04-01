import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  // Je fournie à mon HTML le contenu de FormsModule
  imports: [FormsModule],
  templateUrl: './rotating-card.html',
  styleUrl: './rotating-card.css',
})
export class RotatingCard {
  // State
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Enseignant';
  path = 'rotating_card_profile3.png';
}
