import { Component } from '@angular/core';

import { Theme, ThemeChangerService } from '../../services/theme-changer.service';


@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  providers: [
    ThemeChangerService,
  ]
})
export class ThemeSwitchComponent {
  themeEnum = Theme;

  currentTheme$ = this.themeChangerService.get();

  constructor(
    private themeChangerService: ThemeChangerService,
  ) { }


  toggleTheme() {
    this.themeChangerService.toggle();
  }
}
