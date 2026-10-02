import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/components/default-layout/default-layout.component';
import { FullLayoutComponent } from './layout/components/full-layout/full-layout.component';
import { HeaderComponent } from './header/components/header/header.component';

export const routes: Routes = [
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
				loadChildren: () => import('./articles-list/articles-list.module').then((m) => m.ArticlesListModule)
			},
			{
				path: '',
				loadChildren: () => import('./tags/tags.module').then((m) => m.TagsModule),
				outlet: 'sidebar'
			},
			{
				path: 'article/:slug',
				loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule)
			}
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
				loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule)
			}
		]
	},
	{
		path: '**',
		loadChildren: () => import('./page404/page404.module').then((m) => m.Page404Module)
	}
];
