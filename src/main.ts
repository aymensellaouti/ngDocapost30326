import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// LE fichier de démarage
//  Déclanche l'application
// C'est votre main dans Java
bootstrapApplication(App, appConfig)
// S'il y a un problème
  .catch((err) => console.error(err));

