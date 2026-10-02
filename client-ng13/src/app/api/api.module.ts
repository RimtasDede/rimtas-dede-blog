import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesService } from './services/articles.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ArticlesService,
  ]
})
export class ApiModule { }
