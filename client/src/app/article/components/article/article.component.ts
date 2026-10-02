import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

import { ArticlesService } from '../../../api/services/articles.service';
import { Article } from '../../../api/types';


@Component({
  standalone: false,
  selector: 'app-article',
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

