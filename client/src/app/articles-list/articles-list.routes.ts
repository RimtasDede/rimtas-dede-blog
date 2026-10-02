import { Routes } from '@angular/router';

import { ArticlesListComponent } from './components/articles-list';

export const ARTICLES_LIST_ROUTES: Routes = [
  {
    path: '',
    component: ArticlesListComponent,
  },
];
