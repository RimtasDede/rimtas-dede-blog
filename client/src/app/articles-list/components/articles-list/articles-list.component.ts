import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticlesService } from '../../../api/services/articles.service';
import { Article } from '../../../api/types';


@Component({
  standalone: false,
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private articlesService: ArticlesService,
  ) {
    this.articles$ = this.articlesService.getArticles();
  }

  ngOnInit(): void {
  }

}

