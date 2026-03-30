import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  // main() {

  //   f();// appele h //h appele m

  //   g(); // pas d'appel
  // }
