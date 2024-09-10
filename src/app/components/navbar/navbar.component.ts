import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrPage } from 'src/app/enums/curr-page';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  darkMode$: Observable<boolean>
  @Input() currPage: CurrPage;
  pages = CurrPage;
  collapsed:boolean = true;
  collapseButtonText = "="

  constructor(darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }

  openNavBar() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.collapseButtonText = "="
    } else {
      this.collapseButtonText = "-"
    }
  }

}
