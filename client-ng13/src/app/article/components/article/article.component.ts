import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ArticlesService } from 'src/app/api/services/articles.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$ = this.route.params
    .pipe(
      map(params => params['slug']),
      switchMap(slug => this.articlesService.getArticle(slug)),
    );

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(console.log)
  }

}
