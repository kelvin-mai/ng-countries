import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public mode: BehaviorSubject<Theme> = new BehaviorSubject(Theme.light);

  constructor() {}

  toggleMode() {
    if (this.mode.value === Theme.light) {
      this.mode.next(Theme.dark);
    } else {
      this.mode.next(Theme.light);
    }
  }
}
