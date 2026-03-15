import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Rules } from './components/rules/rules';
import { Question } from './components/question/question';
import { Results } from './components/results/results';

export const routes: Routes = [
  // Reindirizza l'URL base (path vuoto) a '/welcome'
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full' // Importante: controlla che l'intero path sia vuoto
  },
  {
    path: 'welcome',
    component: Welcome
  },
  {
    path: 'rules',
    component: Rules
  },
  {
    path: 'question/:idx',
    component: Question
  },
  {
    path: 'results',
    component: Results
  }
];