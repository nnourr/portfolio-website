import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrPage } from 'src/app/enums/curr-page';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkMode$: Observable<boolean>
  @Input() currPage: CurrPage = CurrPage.WorkExperiencePage;
  pages = CurrPage;

  constructor(darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }

  ngOnInit(): void {
  }

}
