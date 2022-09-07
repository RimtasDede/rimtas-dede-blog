import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { ArticleTextComponent } from './components/article-text/article-text.component';


@NgModule({
  declarations: [
    ArticleComponent,
    MarkdownPipe,
    ArticleTextComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }
