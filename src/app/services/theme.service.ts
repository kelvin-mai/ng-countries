import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode: BehaviorSubject<Theme> = new BehaviorSubject(Theme.light);

  constructor() {}

  get mode$(): Observable<Theme> {
    return this.mode.asObservable();
  }

  toggleMode() {
    if (this.mode.value === Theme.light) {
      this.mode.next(Theme.dark);
    } else {
      this.mode.next(Theme.light);
    }
  }
}
