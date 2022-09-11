import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Tag } from '../types';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }


  getTags(): Observable<Tag[]> {
    return of([
      {
        name: 'PHP',
        slug: 'php'
      },
      {
        name: 'JavaScript',
        slug: 'java-script'
      },
      {
        name: 'Angular',
        slug: 'angular'
      },
      {
        name: 'CSS',
        slug: 'css'
      },
      {
        name: 'NodeJs',
        slug: 'node-js'
      },
      {
        name: 'SQL',
        slug: 'sql'
      },
    ])
      .pipe(
        delay(700)
      );
  }

}
