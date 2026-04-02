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
  constructor() {
    // setTimeout(() => {
    //   console.log('cc')
    // },2000);
  }
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Enseignant';
  path = 'rotating_card_profile3.png';
  somme2P5() {
    console.log('Je calcule 2 + 5');

    return 2 + 5;
  }
}
