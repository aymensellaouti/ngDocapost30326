import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
export class Logger2Service {
  log(message: unknown) {
    console.log('From Logger 2 Service');
    console.log({message});
  }
}
