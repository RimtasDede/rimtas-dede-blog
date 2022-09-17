import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const THEME_STORAGE_KEY = 'theme';


@Injectable()
export class ThemeChangerService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    const theme = this.getThemeFromStorage();

    this.set(theme);
  }


  set(theme: Theme): void {
    const body = this.document.body;
    const classToRemove = this.themeClass(theme === Theme.Light ? Theme.Dark : Theme.Light);
    const classToAdd = this.themeClass(theme);

    this.renderer.removeClass(body, classToRemove);
    this.renderer.addClass(body, classToAdd);

    // save selected theme to local storage
    this.saveThemeToStorage(theme);
  }

  get(): Observable<Theme> {
    return new Observable(observer => {
      // take theme from local storage
      const theme = this.getThemeFromStorage();

      observer.next(theme);

      // observe body class change
      const mutationObserver = new MutationObserver(() => {
        const classList = this.document.body.classList;

        if (classList.contains(this.themeClass(Theme.Dark))) {
          observer.next(Theme.Dark);
          return;
        }

        // otherwise Light
        observer.next(Theme.Light);
      });

      mutationObserver.observe(this.document.body, {
        attributes: true,
        attributeFilter: ['class'],
        childList: false,
        characterData: false
      })

      return () => {
        mutationObserver.disconnect();
      };
    });
  }

  toggle() {
    const theme = this.getThemeFromStorage();
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;

    this.set(newTheme);
  }

  /**
   * Generate theme CSS class name.
   */
  private themeClass(theme: Theme): string {
    return `theme-${theme}`;
  }

  private saveThemeToStorage(theme: Theme) {
    const localStorage = this.document.defaultView?.localStorage;

    localStorage?.setItem(THEME_STORAGE_KEY, theme);
  }

  private getThemeFromStorage(): Theme {
    const localStorage = this.document.defaultView?.localStorage;
    const theme = localStorage?.getItem(THEME_STORAGE_KEY);

    if (
      !theme
      || ![Theme.Light, Theme.Dark].some(t => t === theme)
    ) {
      return Theme.Light;
    }

    return theme as Theme;
  }

}
