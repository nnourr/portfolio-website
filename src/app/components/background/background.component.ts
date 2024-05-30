import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnDestroy {

  _darkMode$: Observable<boolean>
  darkModeSubscription: Subscription

  constructor(private darkModeService: DarkModeService) {
    this._darkMode$ = darkModeService.darkMode$
  }

  ngOnInit(): void {
    this.darkModeSubscription = this._darkMode$.subscribe((isDark) => {
      window.document.body.style.backgroundColor = isDark ? 'rgb(22, 22, 22)' : '#f5f5f5'
    })
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe()
  }
}
