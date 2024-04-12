import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrPage } from 'src/app/enums/curr-page';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-info-buttons',
  templateUrl: './info-buttons.component.html',
  styleUrls: ['./info-buttons.component.scss']
})
export class InfoButtonsComponent  {
  darkMode$: Observable<boolean>
  @Input() showAnimation?:boolean = false;
  @Input() showView?:boolean = true;
  @Input() currPage?: CurrPage = CurrPage.HomePage;
  @Input() rows?: boolean = false;
  pages = CurrPage;

  constructor(darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }
}
