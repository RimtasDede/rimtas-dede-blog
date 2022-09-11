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
        slug: 'php',
        usedTimes: 8,
      },
      {
        name: 'JavaScript',
        slug: 'java-script',
        usedTimes: 15,
      },
      {
        name: 'Angular',
        slug: 'angular',
        usedTimes: 7,
      },
      {
        name: 'CSS',
        slug: 'css',
        usedTimes: 8,
      },
      {
        name: 'NodeJs',
        slug: 'node-js',
        usedTimes: 20,
      },
      {
        name: 'SQL',
        slug: 'sql',
        usedTimes: 11,
      },
    ])
      .pipe(
        delay(700)
      );
  }

}
