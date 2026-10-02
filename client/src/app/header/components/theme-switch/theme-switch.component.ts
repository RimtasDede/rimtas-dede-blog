import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme, ThemeChangerService } from '../../services/theme-changer.service';


@Component({
  standalone: true,
  selector: 'app-theme-switch',
  imports: [CommonModule],
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  providers: [
    ThemeChangerService,
  ]
})
export class ThemeSwitchComponent {
  themeEnum = Theme;

  currentTheme$: Observable<Theme>;

  constructor(
    private themeChangerService: ThemeChangerService,
  ) {
    this.currentTheme$ = this.themeChangerService.get();
  }


  toggleTheme() {
    this.themeChangerService.toggle();
  }
}

