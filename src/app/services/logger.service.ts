import { Injectable } from "@angular/core";
import { LoggerServiceInterface } from "../injection tokens/loggers.inject-token";

// @Injectable({
//   providedIn: 'root'
// })
export class LoggerService implements LoggerServiceInterface {
  log(message: unknown) {
    console.log('From Logger Service');
    console.log({ message });
  }
  info(message: unknown) {
    console.info('info de logger1');
  }
}
