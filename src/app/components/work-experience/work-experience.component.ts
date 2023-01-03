import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrPage } from 'src/app/enums/curr-page';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    this.goBack()
  }
  
  _router: Router;
  darkMode$: Observable<boolean>
  currPage = CurrPage.WorkExperiencePage
  preLoadArr = new Array();
  images = ["assets/system1-logo.svg", "assets/system1-logo-dark.svg", "assets/ebc-logo.png", "assets/ebc-logo-dark.png"]

  constructor(router: Router, darkModeService: DarkModeService) {
    this._router = router;
    this.darkMode$ = darkModeService.darkMode$;
  }

  ngOnInit(): void {
    this.images.forEach ((image, i) => {
      this.preLoadArr[i] = new Image();
      this.preLoadArr[i].src = image;
    })
  }

  goBack() {
    this._router.navigate(['/home'], {queryParams: {showAnimation:false}})
  }

}
