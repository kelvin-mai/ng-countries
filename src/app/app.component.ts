import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './services/api.service';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // this.apiService.getAllCountries().subscribe((res) => console.log(res));
    this.theme = this.themeService.mode;
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }
}
