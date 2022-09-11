import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { AllTagsComponent } from './components/all-tags/all-tags.component';


@NgModule({
  declarations: [
    AllTagsComponent,
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
  ]
})
export class TagsModule { }
