import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
export class Logger3Service {
  log(message: unknown) {
    console.log('From Logger 3 Service');
    console.log({message});
  }
}
