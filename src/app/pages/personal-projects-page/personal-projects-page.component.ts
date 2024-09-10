import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';
import { fadeTransitionAnimation } from 'src/app/animations';
import { ProjectBody } from 'src/app/models/project-body.model';
import { ProjectContainer } from 'src/app/models/project-container.model';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { CurrPage } from '../../enums/curr-page';

@Component({
  selector: 'app-personal-projects-page',
  templateUrl: './personal-projects-page.component.html',
  styleUrls: ['./personal-projects-page.component.scss'],
  animations: [fadeTransitionAnimation]
})
export class PersonalProjectsPageComponent implements AfterViewInit {

  @ViewChildren('personalProjects') personalProjects: QueryList<ElementRef> 
  @ViewChild('scrollTarget', {static: true}) scrollTarget: ElementRef 

  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    this.goBack()
  }

  darkMode$: Observable<boolean>
  _router: Router;
  scrollObserver$: Observable<any>
  isVisible$: boolean[] = [] 
  firstVisible = true  
  isMobile: boolean
  currentPage = CurrPage.PersonalProjectsPage

  projects: ProjectContainer[] = [{
    title: 'Music Circle',
    tech: ['React', 'ExpressJS', 'Google Cloud Run', 'Docker', 'Firebase', 'Tailwind'],
    skillsLearnt: [ 'React Hooks', `OAuth 2.0`, 'CI/CD', 'User Experience Design'],
    body: [{
      heading: 'Intention:', body: 'Create a platform for sharing and discussing music taste using the Spotify API.'
    },{
      heading: 'Highlights:', list: ['Built a lightweight, performant and scalable Express.js backend hosted on Google Cloud Run.', 'Designed and implemented a beautiful, accessible user experience written in React and designed in Figma.', 'Used OAuth to manage access and refresh tokens to authenticate users with the Spotify API.']
    }],
    media: 'assets/musiccircle.png',
    externalMedia: 'https://music-circle.nnourr.tech',
    externalMediaText: 'Visit Music Circle!',
    githubLink: 'https://github.com/nnourr/music-circle-react'
  },{
    title: 'Reddit to TikTok Content Creator',
    tech: ['Python Flask', 'Google Cloud', 'Docker', 'Firebase', 'Pandas', 'OpenCV', 'Selenium', 'Reddit API'],
    skillsLearnt: [ 'Microservice Architecture', 'Docker', 'Computer Vision', 'Multithreading'],
    body: [{
      heading: 'Intention:', body: 'I wanted a project to integrate my experience with web-scrapping, ingesting APIs and my love for Rocket League all in one project. It was also an opportunity to learn microservice architecture, document-oriented databases and computer vision.'
    }, {
      heading: 'Implementation', body: "Rocket League is a popular competitive online game where rocket powered cars play a game of football. For this project I collected clips of goals scored using Reddit's API, OpenCV to detect when a goal has been scored, MoviePy to edit the videos and Selenium to upload the videos to TikTok. All of my information was stored using Firebase, and each stage of the process was implemented as a microservice on Google Cloud Run, with Flask as the web framework and Docker to manage the environment. <br><br>The goal detection was dependent on how the score changes immediately after a goal was changed. Therefore, all I had to do was find the initial score and watch for an increase. The moment an increase was detected, I know a goal has been scored. <br><br>I also developed a website to manage the videos that were being created, allowing me to re-edit the videos if the goal was detected incorrectly. It also allowed me to adjust the parameters used to detect said goal, allowing me finer control over the goal detection in particularly difficult cases."
    },  {
      heading: 'Optimizations', body: "Initially, I was linearly scanning through each frame until I found an initial match, then looked at the consecutive number. This was very slow, O(n), and even worse practically because I had to check for the player and the opponent sides. This is why I did the following optimizations: <ul><li>Multithreading to check the player and opponent sides simultaneously.</li></li>Only checking every 2 frames. While this reduced precision, it was well worth the sacrifice as it meant much faster processing.</li><li>Reducing the time complexity. I realized that this was effectively just a search through all the frames, so re-factored it as a binary search, reducing the time complexity to O(log n)</li></ul>This resulted in a 95% time reduction."
    }],
    media: 'assets/rocketleagueimg.jpg',
    externalMedia: 'https://www.tiktok.com/@supersonic__legend/video/6961310582783888642',
    externalMediaText: 'Watch Example Video:',
    githubLink: 'https://github.com/nnourr/RLTikTok_EditVideo'
  },{
    title: 'Explore NASA',
    tech: ['React', 'Github Pages', 'Astronomy Picture of the Day API'],
    skillsLearnt: [ 'Web Frameworks', 'Web Storage'],
    body: [{heading: 'Intention:', body: 'I created this project as a gateway to learn my first web framework. React was the perfect first choice for me, as it\'s hooks gave me a fundamental understanding of how web frameworks work under the hood. There is also a large pool of learning material.'}, {heading: 'Description', body: "Explore NASA is powered by NASA's Astronomy Picture of the Day API, which exposes their Picture of the Day images and associated metadata. I ingested this information and displayed it in my React app, allowing users to like an image and view it’s description. A user’s liked posts are retained on refresh, using web-storage."}],
    media: 'assets/explorenasa.png',
    externalMedia: 'https://explore-nasa.nnourr.tech/',
    externalMediaText: 'Go to Explore NASA',
    githubLink: 'https://github.com/nnourr/Explore-NASA'
  }]

  constructor(router: Router, darkModeService: DarkModeService, deviceService: DeviceDetectorService) {
    this._router = router;
    this.darkMode$ = darkModeService.darkMode$;    
    this.isMobile = deviceService.isMobile()
  }

  ngAfterViewInit() {
    this.scrollObserver$ = fromEvent(this.scrollTarget.nativeElement, 'scroll')
    this.scrollObserver$.subscribe(() => {
      this.checkVisible()
      this.firstVisible = false
    })
  }

  checkVisible() {
    this.isVisible$ = this.personalProjects.map((elem: ElementRef) => this.isComponentInView(elem.nativeElement, this.scrollTarget.nativeElement));
  }

  private isComponentInView(elem: any, scrollTargetElem: any): boolean {
    const element = elem;
    const elementRect = element.getBoundingClientRect();
    const scrollTarget = scrollTargetElem;
    const scrollTargetBox = scrollTarget.getBoundingClientRect();

    return this.isMobile ? elementRect.left + 150 >= scrollTargetBox.left && elementRect.right - 200 <= scrollTargetBox.right : elementRect.top + 150 >= scrollTargetBox.top && elementRect.bottom - 200 <= scrollTargetBox.bottom;
  }

  goBack() {
    this._router.navigate(['/home'], {queryParams: {showAnimation:false}})
  }
}
