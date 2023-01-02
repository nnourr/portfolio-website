import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  _darkMode$: Observable<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this._darkMode$ = darkModeService.darkMode$
  }

  ngOnInit(): void {
  }

}
