import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticlesService } from '../../../api/services/articles.service';
import { Article } from '../../../api/types';


@Component({
  standalone: true,
  selector: 'app-articles-list',
  imports: [CommonModule, RouterLink],
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

