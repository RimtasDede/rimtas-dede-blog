import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Article } from '../types';

const articles = require('./../articles/articles.json');

@Injectable()
export class ArticlesService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }


  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + `/articles`);
  }

  getArticle(slug: string): Observable<Article | undefined> {
    return this.http.get<Article>(this.apiUrl + `/articles/${slug}`);
  }

}
