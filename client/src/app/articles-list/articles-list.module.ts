import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesListRoutingModule } from './articles-list-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ApiModule } from '../api/api.module';


@NgModule({
  declarations: [
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    ArticlesListRoutingModule,
    ApiModule,
  ]
})
export class ArticlesListModule { }
