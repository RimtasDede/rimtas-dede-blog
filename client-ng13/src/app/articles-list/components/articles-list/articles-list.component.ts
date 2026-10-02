import { Component, OnInit } from '@angular/core';

import { ArticlesService } from 'src/app/api/services/articles.service';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$ = this.articlesService.getArticles();

  constructor(
    private articlesService: ArticlesService,
  ) { }

  ngOnInit(): void {
  }

}
