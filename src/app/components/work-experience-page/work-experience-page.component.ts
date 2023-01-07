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
  "Thrived in fast Agile teams, using Jira and Slack to ensure efficient communication in a remote setting."],
    details: {
      introduction: 'For my summer 2022 Co-Op placement, I worked with the Egyptian Banks Company in order to implement a model <span class="underline"> Automatic Clearing House System.</span> This was a <span class="underline">full stack project</span> making use of <span class="underline">Java SpringBoot</span>, <span class="underline">Angular</span> and <span class="underline">SQL Server</span>',
      aboutEmployer: 'Egyptian Banks Company is a <span class="underline">FinTech company</span> owned by the <span class="underline">Central bank of Egypt</span>. They handle the <span class="underline">technology infrastructure</span> behind <span class="underline">inter-bank transactions</span> and <span class="underline">ATMs',
      learningGoals: ['Become more familiar with production level software engineering best practices.', 
      'Expand my ability to develop web apps and REST APIs.',
      'Improve my ability to work in a team on a production level project.'],
      learningGoalsReflection: 'These goals would help me on my next work term placements as they would give me experience in highly demanded skills and abilities in todays Software Engineering environment. Previously, I have had experience dealing with web apps and developing my own APIs in my <a href="https://github.com/nnourr/Tankie">Tankie project</a> as well as my SVG Image Parser university project at the University of Guelph. However, in order to expand my skills to a production-level standard, I had to make an attentive effort to analyze existing production level and engage in active feedback with my superiors.',
      experience: 'As previously mentioned, my assigned task was to create a model <span class="underline">Automatic Clearing House System.</span> An Automatic Clearing House system allows for the management of electronic banking transactions. This was achieved by usi\ng the REST API, JPA and DTO/Entity models. For implementation, I used Java Spring Boot, SQL Server and Angular. I was able to develop my Software Engineering best practices by learning Test Driven Development in Visual Studio Code. While I wasn\'t able to work in a team, I was able to co-operate with my fellow Co-Op team members on the same project, allowing us to share our ideas and learn from each other\'s techniques.',
      conclusion: 'In conclusion, my Summer 2022 work term experience was extremely positive to my future work. It was crucial to my understanding of the role of best practices in production environments, as well as in developing my web app experience.',
      acknowledgments: 'I would to give a special thanks to my supervisors Mohammed Nasser and Emad Samir for their continued assistance during and after my work term. They guided me effectively through the new challenges I had to face during this work term.'
    }
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
    "Transformed the ACH model into a web-app using Spring Boot and Angular."],
    details: {
      introduction: 'For my summer 2022 Co-Op placement, I worked with the Egyptian Banks Company in order to implement a model <span class="underline"> Automatic Clearing House System.</span> This was a <span class="underline">full stack project</span> making use of <span class="underline">Java SpringBoot</span>, <span class="underline">Angular</span> and <span class="underline">SQL Server</span>',
      aboutEmployer: 'Egyptian Banks Company is a <span class="underline">FinTech company</span> owned by the <span class="underline">Central bank of Egypt</span>. They handle the <span class="underline">technology infrastructure</span> behind <span class="underline">inter-bank transactions</span> and <span class="underline">ATMs',
      learningGoals: ['Become more familiar with <span class="underline">production level</span> software engineering best practices.', 
      'Expand my ability to develop web apps and <span class="underline">REST APIs</span>.',
      'Improve my ability to work in a team on a <span class="underline">production level project</span>.'],
      learningGoalsReflection: 'These goals would help me on my next work term placements as they would give me experience in highly demanded skills and abilities in todays Software Engineering environment. Previously, I have had experience dealing with web apps and developing my own APIs, but in order to expand my skills to a production-level standard, I had to make an attentive effort to analyze existing production level and engage in active feedback with my superiors.',
      experience: 'As previously mentioned, my assigned task was to create a model <span class="underline">Automatic Clearing House System.</span> An Automatic Clearing House system allows for the management of electronic banking transactions. This was achieved by using the <span class="underline">REST API, JPA and DTO/Entity models</span>. For implementation, I used <span class="underline">Java Spring Boot, SQL Server and Angular</span>. I was able to develop my Software Engineering best practices by learning <span class="underline">Test Driven Development</span>. While I wasn\'t able to work in a team, I was able to cooperate with my fellow Co-Op team members on the same project, allowing us to share our ideas and learn from each other\'s techniques.',
      conclusion: 'In conclusion, my Summer 2022 work term experience was extremely positive to my future work. It was crucial to my understanding of the role of <span class="underline">best practices</span> in production environments, as well as in developing my <span class="underline">web app experience</span>.',
      acknowledgments: 'I would to give a special thanks to my supervisors Mohammed Nasser and Emad Samir for their continued assistance during and after my work term. They guided me effectively through the new challenges I had to face during this work term.'
    }
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
