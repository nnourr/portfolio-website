import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrPage } from 'src/app/enums/curr-page';
import { WorkExperienceInfo } from 'src/app/models/work-experience-info.model';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-work-experience-page',
  templateUrl: './work-experience-page.component.html',
  styleUrls: ['./work-experience-page.component.scss']
})
export class WorkExperiencePageComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    this.goBack()
  }
  
  _router: Router;
  darkMode$: Observable<boolean>
  currPage = CurrPage.WorkExperiencePage
  preLoadArr = new Array();
  images = ["assets/system1-logo.svg", "assets/system1-logo-dark.svg", "assets/ebc-logo.png", "assets/ebc-logo-dark.png"]
  workExperiences: WorkExperienceInfo[] = [{
    image: "assets/system1-logo.svg",
    imageDarkMode: "assets/system1-logo-dark.svg",
    companyUrl: "https://system1.com/",
    companyName: "System1",
    date: "Sept 2022 - Dec 2022 (4 months)",
    position: "Full Stack Software Engineer Co-Op",
    tech: "Angular, .NET, Snowflake",
    highlights: ["Recognized for my fast learning on a large production project using cutting-edge Angular and .NET patterns.",
  "Thrived in fast Agile teams, using Jira and Slack to ensure efficient communication in a remote setting."]
  }, {
    image: "assets/ebc-logo.png",
    imageDarkMode: "assets/ebc-logo-dark.png",
    customImageStyle: "width: 40%;",
    companyUrl: "https://www.egyptianbanks.com/",
    companyName: "Egyptian Banks Company",
    date: "May 2022 - Aug 2022 (4 months)",
    position: "Full Stack Software Engineer Co-Op",
    tech: "Angular, Java Spring, MSSQL",
    highlights: ["Developed a model Automated Clearing House (ACH) system using Java and MSSQL.",
  "Transformed the ACH model into a web-app using Spring Boot and Angular."]
  }];

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
