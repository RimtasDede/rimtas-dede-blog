import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo';
import { ThemeSwitchComponent } from '../theme-switch';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
}

