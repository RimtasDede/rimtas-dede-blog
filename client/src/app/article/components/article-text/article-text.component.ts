import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MarkdownPipe } from '../../pipes/markdown.pipe';


@Component({
  standalone: true,
  selector: 'app-article-text',
  imports: [MarkdownPipe],
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ArticleTextComponent {
  @Input() text!: string;
}

