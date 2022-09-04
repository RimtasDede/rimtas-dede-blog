import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout/components/default-layout/default-layout.component';
import { FullLayoutComponent } from './layout/components/full-layout/full-layout.component';
import { HeaderComponent } from './header/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./articles-list/articles-list.module').then(m => m.ArticlesListModule)
      },
      {
        path: '',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
        outlet: 'sidebar'
      },
      {
        path: 'article/:slug',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
    ]
  },

  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
      }
    ]
  },


  {
    path: '**',
    loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
