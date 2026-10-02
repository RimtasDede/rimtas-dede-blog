import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { TagsService } from '../../../api/services/tags.service';
import { Tag } from '../../../api/types';


@Component({
  standalone: true,
  selector: 'app-all-tags',
  imports: [CommonModule, RouterLink],
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

