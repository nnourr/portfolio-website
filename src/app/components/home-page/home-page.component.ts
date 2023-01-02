import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  _darkModeService: DarkModeService;
  darkMode$: Observable<boolean>;
  params$: Subscription;
  mobile: boolean = false;
  showAnimation: boolean = true;

  constructor(private darkModeService: DarkModeService, private route: ActivatedRoute) {
    this._darkModeService = darkModeService;
    this.darkMode$ = this._darkModeService.darkMode$;
    this.params$ = route.queryParams.subscribe(params => {
      console.log(params);
      
      if (params.showAnimation) {
        this.showAnimation = params.showAnimation.toLocaleLowerCase() === 'true';
      }
    })
  }

  ngOnInit(): void {
    if (window.screen.width < 600) {
      this.mobile = true;
    }

    if (this.showAnimation == true) {
      let options: TypedOptions = {
        stringsElement: '#typed-text',
        typeSpeed: 40,
        backSpeed: 30,
        showCursor: false
      };
      
      let typed = new Typed('#typed', options);
    }
  }

  ngOnDestroy(): void {
    this.params$.unsubscribe()
  }

  toggleDarkMode() {
    this._darkModeService.toggle()
  }

}
