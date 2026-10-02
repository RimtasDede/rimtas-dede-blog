import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js/lib/core';

import { marked } from 'marked';

// register only needed languages
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));
hljs.registerLanguage('ts', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));


@Pipe({
  standalone: false,
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return marked(value, {
      highlight: (code, lang) => {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';

        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
    });
  }

}

