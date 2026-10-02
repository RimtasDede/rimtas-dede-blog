import { Routes } from '@angular/router';
import { DefaultLayoutComponent, FullLayoutComponent } from './layout';
import { HeaderComponent } from './header';

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
				loadChildren: () => import('./articles-list').then((m) => m.ARTICLES_LIST_ROUTES)
			},
			{
				path: '',
				loadChildren: () => import('./tags').then((m) => m.TAGS_ROUTES),
				outlet: 'sidebar'
			},
			{
				path: 'article/:slug',
				loadChildren: () => import('./article').then((m) => m.ARTICLE_ROUTES)
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
				loadChildren: () => import('./contacts').then((m) => m.CONTACTS_ROUTES)
			}
		]
	},
	{
		path: '**',
		loadChildren: () => import('./page404').then((m) => m.PAGE404_ROUTES)
	}
];
