import { Routes } from '@angular/router';
import { First } from './component/first/first';
import { Color } from './component/color/color';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Second } from './component/second/second';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'color', component: Color},
  {path: 'cv', component: CvPage},
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'bonjour/:name', component: Second},
];
