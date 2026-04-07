import { Component, signal } from '@angular/core';
import { First } from "./component/first/first";
import { Second } from "./component/second/second";
import { Color } from './component/color/color';
import { Two } from "./component/two/two";
import { RotatingCard } from "./component/rotating-card/rotating-card";
import { Counter } from "./signals/counter/counter";
import { Som } from "./signals/som/som";
import { TtcComponent } from './signals/ttc/ttc.component';
import { Pere } from "./commInterCompo/pere/pere";
import { CvPage } from "./cv/cv-page/cv-page";

@Component({
  // Le sélécteur css qui identifie notre composant
  // Si on veut appeler le composant on doit mettre une balise
  // <app-root/>
  selector: 'app-root',
  // Ici je définis les dépendances de mon template
  imports: [TtcComponent, Som, Pere, CvPage],
  // Le fichier HTML que le composant gére
  templateUrl: './app.html',
  // C'est le CSS de CE COMPOSANT
  styleUrl: './app.css',
})
export class App {}
