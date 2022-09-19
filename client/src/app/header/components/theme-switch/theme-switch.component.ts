import { Component, OnInit } from '@angular/core';

import { Theme, ThemeChangerService } from '../../services/theme-changer.service';


@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  providers: [
    ThemeChangerService,
  ]
})
export class ThemeSwitchComponent implements OnInit {
  themeEnum = Theme;

  currentTheme$ = this.themeChangerService.get();

  constructor(
    private themeChangerService: ThemeChangerService,
  ) { }

  ngOnInit(): void {
  }


  toggleTheme() {
    this.themeChangerService.toggle();
  }
}
