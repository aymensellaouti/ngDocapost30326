import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2usdPipe } from '../../pipes/btc2usd-pipe';
import { LoggerService } from '../../services/logger.service';
import { HelloService } from '../../services/hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvCard, DatePipe, UpperCasePipe, Btc2usdPipe, CurrencyPipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvPage {
  // State de la page

  cvService = inject(CvService);
  /**
   * @var la liste des cvs
   */
  cvs = this.cvService.getCvs();
  /**
   * @var représente le cv sélectionné
   */
  selectedCv = this.cvService.getSelectedCv();
  today = signal(new Date());
  loggerService = inject(LoggerService);
  helloService = inject(HelloService);
  // Je demande une instance de TodoService
  //todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor() {
    this.loggerService.log('cc je suis le cvComponent');
    this.helloService.sayHello();
    this.toastr.info('Bienvenu dans notre cvTech')
  }
}
