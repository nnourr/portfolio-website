import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../../models/blog.model';
import { DarkModeService } from '../../../../services/dark-mode.service';
import { WorkExperienceDetails } from '../../../../models/work-experience-details.model';

@Component({
  selector: 'app-ebc-blog',
  templateUrl: './EBC.blog.html',
})
export class EBCBlogComponent {
  blogContent: Blog = {
    bannerImage: 'assets/ebc-banner.jpg',
    date:'May 2022 - August 2022',
    title: 'EBC',
    titleUrl: 'https://www.egyptianbanks.com/',
    headings: [
      'About My Employer',
      'Learning Goals',
      'Experience',
      'Conclusion',
      'Acknowledgments'
    ]
  }

  experienceDetails: WorkExperienceDetails = {
    introduction:
      'For my summer 2022 Co-Op placement, I worked with the Egyptian Banks Company in order to implement a model <u> Automatic Clearing House System.</u> This was a <u>full stack project</u> making use of <u>Java SpringBoot</u>, <u>Angular</u> and <u>SQL Server</u>',
    aboutEmployer:
      'Egyptian Banks Company is a <u>FinTech company</u> owned by the <u>Central bank of Egypt</u>. They handle the <u>technology infrastructure</u> behind <u>inter-bank transactions</u> and <u>ATMs',
    learningGoals: [
      'Become more familiar with <u>production level</u> software engineering best practices.',
      'Expand my ability to develop web apps and <u>REST APIs</u>.',
      'Improve my ability to work in a team on a <u>production level project</u>.',
    ],
    learningGoalsReflection:
      'These goals would help me on my next work term placements as they would give me experience in highly demanded skills and abilities in todays Software Engineering environment. Previously, I have had experience dealing with web apps and developing my own APIs, but in order to expand my skills to a production-level standard, I had to make an attentive effort to analyze existing production level and engage in active feedback with my superiors.',
    experience: [
      {
        body: `As previously mentioned, my assigned task was to create a model <u>Automatic Clearing House System.</u> An Automatic Clearing House system allows for the management of electronic banking transactions. This was achieved by using the <u>REST API, JPA and DTO/Entity models</u>. For implementation, I used <u>Java Spring Boot, SQL Server and Angular</u>. I was able to develop my Software Engineering best practices by learning <u>Test Driven Development</u>. While I wasn\'t able to work in a team, I was able to cooperate with my fellow Co-Op team members on the same project, allowing us to share our ideas and learn from each other\'s techniques.`
      }
    ],
    conclusion:
      'My Summer 2022 work term experience was extremely positive to my future work. It was crucial to my understanding of the role of <u>best practices</u> in production environments, as well as in developing my <u>web app experience</u>.',
    acknowledgments:
      'I would to give a special thank you to my supervisors Mohammed Nasser and Emad Samir for their continued assistance during and after my work term. They guided me effectively through the new challenges I had to face during this work term.',
  }

  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }
 
}
