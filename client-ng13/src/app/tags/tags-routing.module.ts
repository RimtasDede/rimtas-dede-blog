import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTagsComponent } from './components/all-tags/all-tags.component';

const routes: Routes = [
  {
    path: '',
    component: AllTagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
