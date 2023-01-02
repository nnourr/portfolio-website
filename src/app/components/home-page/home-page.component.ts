import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  _darkModeService: DarkModeService;
  darkMode: Observable<boolean>;
  mobile: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    this._darkModeService = darkModeService;
    this.darkMode = this._darkModeService.darkMode$;
  }

  ngOnInit(): void {
    if (window.screen.width < 600) {
      this.mobile = true;
    }
    var options = {
      stringsElement: '#typed-text',
      typeSpeed: 40,
      backSpeed: 30,
      showCursor: false
    };
    
    var typed = new Typed('#typed', options);
  }

  toggleDarkMode() {
    this._darkModeService.toggle()
  }

}
