import { Routes } from '@angular/router';
import { First } from './component/first/first';
import { Color } from './component/color/color';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Second } from './component/second/second';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'color', component: Color},
  {path: 'cv', component: CvPage},
  {path: 'cv/:id', component: DetailsCvComponent},
  // La route de détailsCv
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'bonjour/:name', component: Second},
  {path: '**', component: NF404},

];
