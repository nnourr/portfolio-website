import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';
import { fadeTransitionAnimation } from 'src/app/animations';
import { ProjectBody } from 'src/app/models/project-body.model';
import { ProjectContainer } from 'src/app/models/project-container.model';
import { DarkModeService } from 'src/app/services/dark-mode.service';

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
  isVisible$: boolean[] = [] // Array of observables for visibility

  projects: ProjectContainer[] = [{
    title: 'RL Reddit to TikTok Web Scrapper',
    tech: ['Python Flask', 'Google Cloud', 'Docker', 'Firebase', 'Pandas', 'OpenCV', 'Selenium', 'Reddit'],
    skillsLearnt: [ 'Microservice Architecture', 'Docker', 'Computer Vision', 'Multithreading'],
    body: [{
      heading: 'Intention:', body: 'The intention of this project was to integrate my experience with web-scrapping, ingesting APIs and my love for Rocket League all in one project. It was also an opportunity to learn microservice architecture, document-oriented databases and computer vision.'
    }, {
      heading: 'Implementation', body: "Rocket League is a popular competitive online game where rocket powered cars play a game of football. For this project I collected clips of goals scored using Reddit's API, OpenCV to detect when a goal has been scored, MoviePy to edit the videos and Selenium to upload the videos to TikTok. All of my information was stored using Firebase, and each stage of the process was implemented as a microservice on Google Cloud Run, with Flask as the web framework and Docker to manage the environment. <br><br>The goal detection was dependent on how the score changes immediately after a goal was changed. Therefore, all I had to do was find the initial score and watch for an increase. The moment an increase was detected, I know a goal has been scored. <br><br>I also developed a website to manage the videos that were being created, allowing me to re-edit the videos if the goal was detected incorrectly. It also allowed me to adjust the parameters used to detect said goal, allowing me finer control over the goal detection in particularly difficult cases."
    },  {
      heading: 'Optimizations', body: "Initially, I was linearly scanning through each frame until I found an initial match, then looked at the consecutive number. This was very slow, O(n), and even worse practically because I had to check for the player and the opponent sides. This is why I did the following optimizations: <ul><li>Multithreading to check the player and opponent sides simultaneously.</li></li>Only checking every 2 frames. While this reduced precision, it was well worth the sacrifice as it meant much faster processing.</li><li>Reducing the time complexity. I realized that this was effectively just a search through all the frames, so re-factored it as a binary search, reducing the time complexity to O(log n)</li></ul>This resulted in a 95% time reduction."
    }],
    media: ['assets/rocketleagueimg.jpg'],
    link: 'https://www.tiktok.com/@supersonic__legend/video/6961310582783888642'
  },{
    title: 'Explore NASA',
    tech: ['React', 'Github Pages', 'Astronomy Picture of the Day API'],
    skillsLearnt: [ 'Web Frameworks', 'Web Storage'],
    body: [{heading: 'Intention:', body: 'The intention of this project was to learn my first web framework. React was the perfect first choice for me, as useState() gave me a fundamental understanding of how web frameworks work under the hood. There is also a large pool of learning material.'}, {heading: 'Description', body: "Explore NASA is powered by NASA's Astronomy Picture of the Day API, which exposes their Picture of the Day images and associated metadata. I ingested this information and displayed it in my React app, allowing users to like an image and view it’s description. A user’s liked posts are retained on refresh, using web-storage."}],
    media: ['assets/explorenasa.png'],
    link: 'https://nnourr.tech'
  }]

  constructor(router: Router, darkModeService: DarkModeService) {
    this._router = router;
    this.darkMode$ = darkModeService.darkMode$;
  }

  ngAfterViewInit() {
    this.scrollObserver$ = fromEvent(this.scrollTarget.nativeElement, 'scroll')
    this.scrollObserver$.subscribe(() => {
      this.checkVisible()
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

    return elementRect.top + 65 >= scrollTargetBox.top - 45 && elementRect.bottom - 65 <= scrollTargetBox.bottom;
  }

  goBack() {
    this._router.navigate(['/home'], {queryParams: {showAnimation:false}})
  }
}
