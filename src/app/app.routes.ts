import { Routes } from '@angular/router';


import { CvPage } from './cv/cv-page/cv-page';







import { authGuard } from './auth/guards/auth-guard';
import { detailsCvResolver } from './cv/resolvers/details-cv-resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./component/first/first').then(m => m.First) },
  { path: 'color', loadComponent: () => import('./component/color/color').then(m => m.Color) },
  { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
  { path: 'cv', loadComponent: () => import('./cv/cv-page/cv-page').then(
    file => file.CvPage
  ) },
  { path: 'cv/add', loadComponent: () => import('./cv/add-cv/add-cv').then(m => m.AddCv), canActivate: [authGuard] },
  {
    path: 'cv/:id',
    loadComponent: () => import('./cv/details-cv/details-cv.component').then(m => m.DetailsCvComponent),
    resolve: {
      // utilises le detailsCvResolver pour résoudre les données
      cv: detailsCvResolver
    }
  },
  // La route de détailsCv
  { path: 'todo', loadComponent: () => import('./todo/todo/todo.component').then(m => m.TodoComponent) },
  { path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) },
  { path: 'bonjour/:name', loadComponent: () => import('./component/second/second').then(m => m.Second) },
  { path: '**', loadComponent: () => import('./components/nf404/nf404').then(m => m.NF404) },
];
