import { Component } from '@angular/core';

import { TagsService } from 'src/app/api/services/tags.service';


@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss']
})
export class AllTagsComponent {

  tags$ = this.tagsService.getTags();

  constructor(
    private tagsService: TagsService,
  ) { }

}
