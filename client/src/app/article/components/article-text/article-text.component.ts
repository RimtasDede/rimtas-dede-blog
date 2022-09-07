import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ArticleTextComponent {
  @Input() text!: string;
}
