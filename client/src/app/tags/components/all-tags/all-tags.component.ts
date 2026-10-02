import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TagsService } from '../../../api/services/tags.service';
import { Tag } from '../../../api/types';


@Component({
  standalone: false,
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss']
})
export class AllTagsComponent {

  tags$: Observable<Tag[]>;

  constructor(
    private tagsService: TagsService,
  ) {
    this.tags$ = this.tagsService.getTags();
  }

}

