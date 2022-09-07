import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

import { Article } from '../types';

const articles = require('./../articles/articles.json');

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }


  getArticles(): Observable<Article[]> {
    return of(articles)
      .pipe(
        delay(500)
      );
  }

  getArticle(slug: string): Observable<Article | undefined> {
    return of(articles as Article[])
      .pipe(
        delay(500),
        map(articles => articles.find(item => item.slug === slug)),
        tap(article => {
          if (!article) {
            new Error('No article');
          }
        }),
      );
  }

}
