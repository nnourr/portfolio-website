import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { fadeTransitionAnimation } from 'src/app/animations';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeTransitionAnimation]
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
      if (params.showAnimation) {
        this.showAnimation = params.showAnimation.toLocaleLowerCase() === 'true';
      }
    })
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    if (window.screen.width <= window.screen.height && this.mobile == false) {
      this.mobile = true;
    } else if (window.screen.width > window.screen.height && this.mobile == true) {
      this.mobile = false;
    }
  }

  ngOnInit(): void {
    if (window.screen.width <= window.screen.height) {
      this.mobile = true;
    } else if (window.screen.width > window.screen.height) {
      this.mobile = false;
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
