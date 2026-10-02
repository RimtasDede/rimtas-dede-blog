import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

import { ArticlesService } from '../../../api/services/articles.service';
import { Article } from '../../../api/types';
import { ArticleTextComponent } from '../article-text';


@Component({
  standalone: true,
  selector: 'app-article',
  imports: [CommonModule, ArticleTextComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article | undefined>;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
  ) {
    this.article$ = this.route.params
      .pipe(
        map(params => params['slug']),
        switchMap(slug => this.articlesService.getArticle(slug)),
      );
  }

  ngOnInit(): void {
    this.route.params.subscribe(console.log)
  }

}

