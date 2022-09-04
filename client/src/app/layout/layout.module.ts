import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FullLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultLayoutComponent,
    FullLayoutComponent,
  ]
})
export class LayoutModule { }
