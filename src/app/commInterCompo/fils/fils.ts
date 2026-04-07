import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  messageDePapa = input.required<string>({
    alias: 'message',
    // transform: (value) => {
    //   return 'Le message est' + value
    // }
  });
  //déclarer un event output
  sendMessage = output<string>();

  onSendMEssage() {
    // émis l'event avec le contenu
    this.sendMessage.emit("ok est ce que je peux garder la monnaie")
  }
}
