import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.scss']
})
export class DarkModeButtonComponent implements OnInit {

  _darkModeService: DarkModeService;
  darkMode: Observable<Boolean>

  constructor(private darkModeService: DarkModeService) {
    this._darkModeService = darkModeService;
    this.darkMode = this._darkModeService.darkMode$;
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this._darkModeService.toggle();
  }
}
