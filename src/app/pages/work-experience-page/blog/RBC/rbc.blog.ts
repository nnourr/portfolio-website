import { Component } from '@angular/core';
import { Blog } from '../../../../models/blog.model';
import { DarkModeService } from '../../../../services/dark-mode.service';
import { Observable } from 'rxjs';
import { WorkExperience } from '../../work-experience.info';
import { WorkExperienceDetails } from '../../../../models/work-experience-details.model';

@Component({
  selector: 'app-rbc-blog',
  templateUrl: './rbc.blog.html',
})
export class RBCBlogComponent {
  blogContent: Blog = {
    bannerImage: 'assets/rbc-banner.jpeg',
    date:'June 2023 - August 2023',
    title: 'RBC',
    titleUrl: 'https://www.rbcroyalbank.com/',
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
      'For my Summer 2023 Co-Op placement, I worked with RBC as an <u>Applications Developer</u> under JSOC, which is part of <u>Global Cyber Security</u>. The project was a data reporting tool for RBC\'s cyber security resilience, and was built with <u>Vue.js</u> and <u>Django Rest Framework</u>. Our workflow was heavily <u>self managed</u>, with each engineer designing their own sprints from their compiled Epics.',
    aboutEmployer:
      'RBC is one of Canada\'s <u>largest banks</u> by market capitalization. The team I worked on, JSOC, handled projects concerning the <u>digital security of the bank\'s employees and customers.</u>',
    learningGoals: [
      'Grow my network and improve my networking skills',
      'Get to know everyone on my team',
      'Learn more about Cyber Security',
      'Perform a team presentation about a topic or a new idea',
    ],
    learningGoalsReflection:
      'My goals for this term were mostly focused on <u>Soft-Skills</u> and <u>building interpersonal relationships</u>. I consider myself successful, as I attended multiple networking events and got a lot more comfortable reach out to people. I was also successful in performing a team presentation, as you can read more about in the Experience section.',
    experience: [
      {
        body:  `At RBC, I learnt what it takes to build <u>quality</u>, <u>resilient</u> and <u>fast</u> backends, as well as <u>beautiful</u>, <u>accessible</u> and <u>responsive</u> frontends. I started with mostly backend work, rebuilding our entire <u>REST API</u> (which was very new at the time) to better handle our frontend requirements, re-thinking how we use <u>Django Serializers</u> for a better <u>developer experience</u> and <u>scalability</u>. 
        I was also in charge of implementing the cutting edge <u>DRF-Spectacular</u> library, which utilizes the <u>Open API</u> specification to automatically generate accurate and usable documentation, facilitating a <u>better QA and on-boarding experience</u>. 
        Once that was done, I started <u>building entire features</u>, with endpoints architected with a <u>test-driven-design</u> approach, ensuring <u>code quality</u>.<br><br>

        On the frontend, we use <u>Figma</u>, a UI design application, to create all our designs before implementing them in <u>Vue.js</u>. This was my first time using the framework, so I had to utilize my <u>fast-learning skills</u> to on-board to our application. At first, I took components that were already designed and implemented them, using the <u>CSS Post-Processor Tailwind</u> and <u>UseFetch</u> to communicate with the endpoints I had created. 
        These components were <u>dynamic</u> and <u>bug-free</u>, as I used <u>Jest</u> to ensure functionality. After gaining familiarity with Vue.Js, I moved on to designing a component myself, a new <u>Priority Tag</u>. This involved design changes across the entire application, providing me with extensive experience in Figma, which I was also using for the first time. 
        Working <u>cross-functionally</u> with <u>Project Managers and Project Owners</u> to gain approval for my designs, I learnt valuable <u>business communication</u> skills. During the design process, I had to think about <u>User Flows</u> and <u>scalability</u> when designing new modals and notification components. The Priority Tag also involved a new <u>POST</u> endpoint, completing <u>CRUD</u> functionality for the program.<br><br>

        To facilitate better <u>end-to-end testing</u>, I was tasked with the creation of a <u>Mock API</u> for our ingestible data. This was an entirely <u>new Django application</u>, where I used the <u>Faker library</u> to generate mock data. This data also had to be <u>relational</u> in order to test our ingestion process, so I had to design the new API with that in mind. 
        I also took a <u>test-driven-design</u> approach to this API, configuring our <u>proprietary pipeline</u> to <u>ensure unit tests were successful</u> before deployment.<br><br>

        During my work term, I also had lots of valuable <u>networking experiences</u>, including <u>town halls</u> and <u>summer celebrations</u>. I was also involved in a number of <u>hackathons</u>, the first of which being <u>BattleSnake</u>. This involved working in a team with 3 other students to create an <u>AI powered</u> snake in a competitive, PVP game. We used the <u>MaxN MinMax</u> algorithm to find the best move for our snake, looking 5 moves ahead. 
        To score the board, we used a <u>FloodFill</u> algorithm. We also used an <u>AWS EC2</u> instance to host our snake for the competition, where we were <u>finalists</u> in the Experienced division. For more details about our snake and the competition, click <a class='underline' target='_blank' href=https://github.com/JaxHodg/battlesnake>here</a>. My second competition was a <u>Case Competition</u>, where students were placed in groups of 6 to solve a <u>real-world</u> business problem and <u>present</u> our ideas. While our team did not win, our proposed solution <u>PowerAutomate</u> did. 
        I also <u>attended 2 Tech conferences</u>, the <a class='underline' target='_blank' href=https://brainstation.io/online/intro-day/data-science>Brain Station Intro-Day</a> and the <a class='underline' target='_blank' href=https://www.techto.org/in-real-life-event>TechTo:TechTogether Conference</a><br><br>

        Thought my time at RBC, I was also showcasing my work through the bi-weekly <u>demo day</u>, which I had suggested to my manager. During my demos, I provided the extended JSOC team with insights into DRF-Spectacular and Faker, showcasing their <u>purpose</u> and <u>business impact</u>. Demo days continue to this day.`
      }
    ],
    conclusion:
      'In conclusion, my work term at RBC was extremely influential. Working in an environment with such <u>high code-quality standards</u> was intimidating at first, but I quickly adapted and improved as a developer because of it. The experience also <u>kickstarted my networking</u> and brought light to the importance of business communication. I learnt several new technologies and progressed in my path to becoming a well rounded developer. I also gained new insight into <u>best design practices</u> through my experiences with Figma.',
    acknowledgments:
      'Thank you to my manager, <u>Evan Timms</u> for assisting me throughout my entire RBC journey, helping me get adjusted to the very new environment. I would also like to thank our front-end engineer, <u>Vinícius Philot</u> for being a beacon of knowledge into advanced <u>UI/UX</u> design practices and reviewing every pixel I placed down.',
  }

  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }
 
}
