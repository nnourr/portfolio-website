import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private readonly darkModeSubject$: BehaviorSubject<boolean>;
  private readonly storageKey: string = 'dark-mode';

  constructor() {
    this.darkModeSubject$ = new BehaviorSubject(this.getInitialDarkModeValue());
    this.darkModeSubject$.getValue() ? this.enable() : this.disable();
  }

  /**
   * An Observable representing current dark mode.
   * Only fires the initial and distinct values.
   */
  get darkMode$(): Observable<boolean> {
    return this.darkModeSubject$.asObservable().pipe(distinctUntilChanged());
  }

  toggle(): void {
    this.darkModeSubject$.getValue() ? this.disable() : this.enable();
  }

  enable(): void {
    this.saveDarkModeToStorage(true);
    this.darkModeSubject$.next(true);
  }

  disable(): void {
    this.saveDarkModeToStorage(false);
    this.darkModeSubject$.next(false);
  }
  
  private getInitialDarkModeValue(): boolean {
    const darkModeFromStorage = this.getDarkModeFromStorage();

    if (darkModeFromStorage === undefined || darkModeFromStorage === null) {
      return true;
    }

    return darkModeFromStorage;
  }

  private saveDarkModeToStorage(darkMode: boolean): void {
    localStorage.setItem(this.storageKey, JSON.stringify({ darkMode }));
  }

  private getDarkModeFromStorage(): boolean | null {
    const storageItem = localStorage.getItem(this.storageKey);

    if (storageItem) {
      try {
        return JSON.parse(storageItem)?.darkMode;
      } catch (error) {
        console.error(
          'Invalid darkMode localStorage item:',
          storageItem,
          'falling back to color scheme media query'
        );
      }
    }

    return null;
  }
}
