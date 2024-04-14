import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core"
import { Router } from "@angular/router"
import { DeviceDetectorService } from "ngx-device-detector"
import { Observable, fromEvent } from "rxjs"
import { fadeTransitionAnimation } from "src/app/animations"
import { CurrPage } from "src/app/enums/curr-page"
import { WorkExperienceInfo } from "src/app/models/work-experience-info.model"
import { DarkModeService } from "src/app/services/dark-mode.service"

@Component({
  selector: "app-work-experience-page",
  templateUrl: "./work-experience-page.component.html",
  styleUrls: ["./work-experience-page.component.scss"],
  animations: [fadeTransitionAnimation],
})
export class WorkExperiencePageComponent implements OnInit {
  @HostListener("window:popstate", ["$event"])
  onPopState(_event: any) {
    this.goBack()
  }
  @ViewChildren("companies", { read: ElementRef }) companies: QueryList<ElementRef>
  @ViewChild("scrollTarget", { static: true }) scrollTarget: ElementRef

  _router: Router
  darkMode$: Observable<boolean>
  isMobile: boolean
  isVisible$: Observable<boolean>[] = [new Observable(), new Observable(), new Observable(), new Observable()]
  currPage = CurrPage.WorkExperiencePage
  preLoadArr = new Array()
  images = {
    ecobee: { light: "assets/ecobee-light.png", dark: "assets/ecobee-dark.png" },
    rbc: { light: "assets/rbc-color.png", dark: "assets/rbc-dark.png" },
    system1: { light: "assets/system1-logo.svg", dark: "assets/system1-logo-dark.svg" },
    ebc: { light: "assets/ebc-logo.png", dark: "assets/ebc-logo-dark.png" },
  }
  workExperiences: WorkExperienceInfo[] = [
    {
      image: this.images.ecobee.light,
      imageDarkMode: this.images.ecobee.dark,
      companyUrl: "https://www.ecobee.com/",
      companyName: "ecobee",
      date: "Jan 2024 - Aug 2024 (8 months)",
      position: "Backend Software Engineer Co-Op",
      tech: "Go, Nestjs, GKE, nginx",
      highlights: [
        "Lead a multi-faceted GKE upgrade, cooperating with my team to manage risk on a tight deadline.",
        "Took initiative to orchestrate team-wide discussions and implement process changes to improve developer QoL and production stability.",
        "Created ADRs to investigate known bugs, involving identification of the root-cause, presenting solutions and discussing action items with the team",
      ],
    },
    {
      image: this.images.rbc.light,
      imageDarkMode: this.images.rbc.dark,
      customImageStyle: "width: 60%;",
      companyUrl: "https://www.rbc.com/about-rbc.html",
      companyName: "Royal Bank of Canada",
      reference: "evan.timms@rbc.com",
      date: "May 2023 - Aug 2023 (4 months)",
      position: "Applications Developer Co-Op",
      tech: "Python Django, Vue.js, Tailwind",
      highlights: [
        "Architected RESTful API endpoints, wrote Database Migrations, and configured CI/CD Pipelines using Django REST",
        "Collaborated with PMs and POs to refine requirements into Jira Releases, Epics and Stories in a fast agile environment",
        "Built entire features from the ground up, starting with Figma Design then Data Ingestion then API then Vue front-end",
      ],
      details: {
        introduction:
          'For my Summer 2023 Co-Op placement, I worked with RBC as an <span class="underline">Applications Developer</span> under JSOC, which is part of <span class="underline">Global Cyber Security</span>. The project was a data reporting tool for RBC\'s cyber security resilience, and was built with <span class="underline">Vue.js</span> and <span class="underline">Django Rest Framework</span>. Our workflow was heavily <span class="underline">self managed</span>, with each engineer designing their own sprints from their compiled Epics.',
        aboutEmployer:
          'RBC is one of Canada\'s <span class="underline">largest banks</span> by market capitalization. The team I worked on, JSOC, handled projects concerning the <span class="underline">digital security of the bank\'s employees and customers.</span>',
        learningGoals: [
          "Grow my network and improve my networking skills",
          "Get to know everyone on my team",
          "Learn more about Cyber Security",
          "Perform a team presentation about a topic or a new idea",
        ],
        learningGoalsReflection:
          'My goals for this term were mostly focused on <span class="underline">Soft-Skills</span> and <span class="underline">building interpersonal relationships</span>. I consider myself successful, as I attended multiple networking events and got a lot more comfortable reach out to people. I was also successful in performing a team presentation, as you can read more about in the Experience section.',
        experience:
          'At RBC, I learnt what it takes to build <span class="underline">quality</span>, <span class="underline">resilient</span> and <span class="underline">fast</span> backends, as well as <span class="underline">beautiful</span>, <span class="underline">accessible</span> and <span class="underline">responsive</span> frontends. I started with mostly backend work, rebuilding our entire <span class="underline">REST API</span> (which was very new at the time) to better handle our frontend requirements, re-thinking how we use <span class="underline">Django Serializers</span> for a better <span class="underline">developer experience</span> and <span class="underline">scalability</span>. I was also in charge of implementing the cutting edge <span class="underline">DRF-Spectacular</span> library, which utilizes the <span class="underline">Open API</span> specification to automatically generate accurate and usable documentation, facilitating a <span class="underline">better QA and on-boarding experience</span>. Once that was done, I started <span class="underline">building entire features</span>, with endpoints architected with a <span class="underline">test-driven-design</span> approach, ensuring <span class="underline">code quality</span>.<br><br>' +
          'On the frontend, we use <span class="underline">Figma</span>, a UI design application, to create all our designs before implementing them in <span class="underline">Vue.js</span>. This was my first time using the framework, so I had to utilize my <span class="underline">fast-learning skills</span> to on-board to our application. At first, I took components that were already designed and implemented them, using the <span class="underline">CSS Post-Processor Tailwind</span> and <span class="underline">UseFetch</span> to communicate with the endpoints I had created. These components were <span class="underline">dynamic</span> and <span class="underline">bug-free</span>, as I used <span class="underline">Jest</span> to ensure functionality. After gaining familiarity with Vue.Js, I moved on to designing a component myself, a new <span class="underline">Priority Tag</span>. This involved design changes across the entire application, providing me with extensive experience in Figma, which I was also using for the first time. Working <span class="underline">cross-functionally</span> with <span class="underline">Project Managers and Project Owners</span> to gain approval for my designs, I learnt valuable <span class="underline">business communication</span> skills. During the design process, I had to think about <span class="underline">User Flows</span> and <span class="underline">scalability</span> when designing new modals and notification components. The Priority Tag also involved a new <span class="underline">POST</span> endpoint, completing <span class="underline">CRUD</span> functionality for the program.<br><br>' +
          'To facilitate better <span class="underline">end-to-end testing</span>, I was tasked with the creation of a <span class="underline">Mock API</span> for our ingestible data. This was an entirely <span class="underline">new Django application</span>, where I used the <span class="underline">Faker library</span> to generate mock data. This data also had to be <span class="underline">relational</span> in order to test our ingestion process, so I had to design the new API with that in mind. I also took a <span class="underline">test-driven-design</span> approach to this API, configuring our <span class="underline">proprietary pipeline</span> to <span class="underline">ensure unit tests were successful</span> before deployment.<br><br>' +
          'During my work term, I also had lots of valuable <span class="underline">networking experiences</span>, including <span class="underline">town halls</span> and <span class="underline">summer celebrations</span>. I was also involved in a number of <span class="underline">hackathons</span>, the first of which being <span class="underline">BattleSnake</span>. This involved working in a team with 3 other students to create an <span class="underline">AI powered</span> snake in a competitive, PVP game. We used the <span class="underline">MaxN MinMax</span> algorithm to find the best move for our snake, looking 5 moves ahead. To score the board, we used a <span class="underline">FloodFill</span> algorithm. We also used an <span class="underline">AWS EC2</span> instance to host our snake for the competition, where we were <span class="underline">finalists</span> in the Experienced division. For more details about our snake and the competition, click <a class="underline" target="_blank" href=https://github.com/JaxHodg/battlesnake>here</a>. My second competition was a <span class="underline">Case Competition</span>, where students were placed in groups of 6 to solve a <span class="underline">real-world</span> business problem and <span class="underline">present</span> our ideas. While our team did not win, our proposed solution <span class="underline">PowerAutomate</span> did. I also <span class="underline">attended 2 Tech conferences</span>, the <a class="underline" target="_blank" href=https://brainstation.io/online/intro-day/data-science>Brain Station Intro-Day</a> and the <a class="underline" target="_blank" href=https://www.techto.org/in-real-life-event>TechTo:TechTogether Conference</a><br><br>' +
          'Thought my time at RBC, I was also showcasing my work through the bi-weekly <span class="underline">demo day</span>, which I had suggested to my manager. During my demos, I provided the extended JSOC team with insights into DRF-Spectacular and Faker, showcasing their <span class="underline">purpose</span> and <span class="underline">business impact</span>. Demo days continue to this day.',
        conclusion:
          'In conclusion, my work term at RBC was extremely influential. Working in an environment with such <span class="underline">high code-quality standards</span> was intimidating at first, but I quickly adapted and improved as a developer because of it. The experience also <span class="underline">kickstarted my networking</span> and brought light to the importance of business communication. I learnt several new technologies and progressed in my path to becoming a well rounded developer. I also gained new insight into <span class="underline">best design practices</span> through my experiences with Figma.',
        acknowledgments:
          'Thank you to my manager, <span class="underline">Evan Timms</span> for assisting me throughout my entire RBC journey, helping me get adjusted to the very new environment. I would also like to thank our front-end engineer, <span class="underline">Vinícius Philot</span> for being a beacon of knowledge into advanced <span class="underline">UI/UX</span> design practices and reviewing every pixel I placed down.',
      },
    },
    {
      image: this.images.system1.light,
      imageDarkMode: this.images.system1.dark,
      companyUrl: "https://system1.com/",
      companyName: "System1",
      reference: "chris.dekker@system1.com",
      date: "Sept 2022 - Dec 2022 (4 months)",
      position: "Full Stack Software Engineer Co-Op",
      tech: "Angular, .NET, Snowflake",
      highlights: [
        "Recognized for my fast learning on a large production project using cutting-edge Angular and .NET patterns",
        "Optimized SQL queries to cut down on response time by 30-40%",
        "Thrived in fast Agile teams, using Jira and Slack to ensure efficient remote communication",
      ],
      details: {
        introduction:
          'For my Fall 2022 Co-Op placement, I worked with System1 as a <span class="underline">Full Stack Software Engineer</span>. During this time, I was working with <span class="underline">Angular</span> on the frontend, <span class="underline">.NET</span> on the backend and <span class="underline">Snowflake</span> for the database. I worked in multiple <span class="underline">Agile teams</span>, making extensive use of <span class="underline">JIRA</span> and <span class="underline">Slack</span> for communication.',
        aboutEmployer:
          'System1 combines best-in-class technology & data science to operate the most dynamic <span class="underline">Responsive Acquisition Marketing Platform (RAMP)</span>. This allows them to to build <span class="underline">powerful brands</span> across multiple <span class="underline">consumer verticals</span>, develop & grow our suite of <span class="underline">privacy-focused products</span>, and deliver <span class="underline">high-intent customers</span> to their advertising partners.',
        learningGoals: [
          'See how <span class="underline">popular programming frameworks</span> like Angular and .NET work differently when used in <span class="underline">production environments</span> as opposed to personal/small projects.',
          'Gain experience with Slack, Jira and other <span class="underline">professional tools for programming communication</span>.',
          'Be able to work effectively in a <span class="underline">programming team</span> working on a <span class="underline">production project</span>.',
        ],
        learningGoalsReflection:
          'My goals for this work term are mostly focused on the <span class="underline">soft skills</span> of working as a Software Engineer as opposed to technical goals. This is because I am confident in my ability to learn technical concepts, but I was unsure about my application in a <span class="underline">real-world working environment</span>. From my experience these skills are also more valued by employers, meaning they will be vital for my next work term and continued career',
        experience:
          'My experience at System1 was <span class="underline">fast-paced</span>, <span class="underline">technical</span> and <span class="underline">highly resourceful</span>. My first task involved creating <span class="underline">JIRA tickets</span> from a spreadsheet created during a BugBash. Within my first ticket I learnt about <span class="underline">RXJS Observables</span> as well as <span class="underline">service dependency injection</span>, immediately improving my knowledge about <span class="underline">professional Angular development</span>.<br><br>' +
          'Not much later I took on a ticket involving changes on the full stack, meaning I was interacting with not only Angular on the frontend, but also <span class="underline">.NET</span> and <span class="underline">Snowflake</span> for the first time. This change involved modifying an existing query to <span class="underline">join data</span> from a new table, then modifying the <span class="underline">.NET API endpoint</span> and frontend to reflect the changes. Despite adding a new table to the query, me and supervisor found a way to make the query run <span class="underline">30-40% faster</span> by removing other redundant joins.<br><br>' +
          'Another memorable ticked involved me <span class="underline">preventing cyber attacks</span> by improving the <span class="underline">file validation</span> on the frontend and backend. On the Angular side, I developed a new component in an internal shared library, which made use of <span class="underline">Angular FormControl</span>. This gave me a little bit of experience developing <span class="underline">NPM Packages</span> as well as <span class="underline">custom Form Control validation</span>. For the backend, I developed an <span class="underline">injectable service</span> that works with <span class="underline">IFormFile</span> objects. It checks the file extension, content-type and <span class="underline">file header bytes</span> of the IFormFile to make sure that it is the correct type. In order to make sure the code is as <span class="underline">reusable</span> and <span class="underline">extendable</span> as possible, I made use of the <span class="underline">strategy pattern</span> to deicide what it would use to validate based on the file type. All a developer would have to do to add a new file type for validation is add a new FileType value, <span class="underline">with no changes made to service itself</span>.<br><br>' +
          'During my term, I <span class="underline">presented my work</span> to the whole dev team on two separate occasions, and received <span class="underline">special recognition for my work</span>',
        conclusion:
          'My Fall 2022 work term could not have been more impactful. It exposed me to countless new experiences that will surely form the rest of my professional career. On the technical side, I improved my <span class="underline">Angular proficiency</span> to a <span class="underline">professional standard</span>, exposed me to <span class="underline">.NET</span> for the first time and taught me the <span class="underline">subtleties of high-performance SQL queries</span>. The work done on my soft skills have been even more impactful in my opinion, greatly <span class="underline">improving my technical communication skills</span> and my <span class="underline">confidence in an office environment</span>. I was able to <span class="underline">meet my goals</span> and could not have been happier.',
        acknowledgments:
          "I would to give a special thank you to team members Chris Dekker, Matt Potts and Darren Laser for the incredible support they gave me the entire term (not to mention all the PR comments), as well as Babak Hajiahmadi for his on boarding and the entire dev team for making me at home in their company.",
      },
    },
    {
      image: this.images.ebc.light,
      imageDarkMode: this.images.ebc.dark,
      customImageStyle: "width: 40%;",
      companyUrl: "https://www.egyptianbanks.com/",
      companyName: "Egyptian Banks Company",
      date: "May 2022 - Aug 2022 (4 months)",
      position: "Full Stack Software Engineer Co-Op",
      tech: "Angular, Java Spring, MSSQL",
      highlights: [
        "Developed a model Automated Clearing House (ACH) system using Java and MSSQL",
        "Proficiently applied industry-standard programming practices and Test-Driven-Design to ensure code quality",
        "Transformed the ACH model into a web-app using Spring Boot and Angular",
      ],
      details: {
        introduction:
          'For my summer 2022 Co-Op placement, I worked with the Egyptian Banks Company in order to implement a model <span class="underline"> Automatic Clearing House System.</span> This was a <span class="underline">full stack project</span> making use of <span class="underline">Java SpringBoot</span>, <span class="underline">Angular</span> and <span class="underline">SQL Server</span>',
        aboutEmployer:
          'Egyptian Banks Company is a <span class="underline">FinTech company</span> owned by the <span class="underline">Central bank of Egypt</span>. They handle the <span class="underline">technology infrastructure</span> behind <span class="underline">inter-bank transactions</span> and <span class="underline">ATMs',
        learningGoals: [
          'Become more familiar with <span class="underline">production level</span> software engineering best practices.',
          'Expand my ability to develop web apps and <span class="underline">REST APIs</span>.',
          'Improve my ability to work in a team on a <span class="underline">production level project</span>.',
        ],
        learningGoalsReflection:
          "These goals would help me on my next work term placements as they would give me experience in highly demanded skills and abilities in todays Software Engineering environment. Previously, I have had experience dealing with web apps and developing my own APIs, but in order to expand my skills to a production-level standard, I had to make an attentive effort to analyze existing production level and engage in active feedback with my superiors.",
        experience:
          'As previously mentioned, my assigned task was to create a model <span class="underline">Automatic Clearing House System.</span> An Automatic Clearing House system allows for the management of electronic banking transactions. This was achieved by using the <span class="underline">REST API, JPA and DTO/Entity models</span>. For implementation, I used <span class="underline">Java Spring Boot, SQL Server and Angular</span>. I was able to develop my Software Engineering best practices by learning <span class="underline">Test Driven Development</span>. While I wasn\'t able to work in a team, I was able to cooperate with my fellow Co-Op team members on the same project, allowing us to share our ideas and learn from each other\'s techniques.',
        conclusion:
          'My Summer 2022 work term experience was extremely positive to my future work. It was crucial to my understanding of the role of <span class="underline">best practices</span> in production environments, as well as in developing my <span class="underline">web app experience</span>.',
        acknowledgments:
          "I would to give a special thank you to my supervisors Mohammed Nasser and Emad Samir for their continued assistance during and after my work term. They guided me effectively through the new challenges I had to face during this work term.",
      },
    },
  ]

  constructor(router: Router, darkModeService: DarkModeService, deviceService: DeviceDetectorService) {
    this._router = router
    this.darkMode$ = darkModeService.darkMode$
    this.isMobile = deviceService.isMobile()
  }

  ngOnInit(): void {
    Object.values(this.images).forEach((company) => {
      Object.values(company).forEach((image) => {
        this.preLoadArr.push(new Image())
        this.preLoadArr[this.preLoadArr.length - 1].src = image
      })
    })
  }

  ngAfterViewInit(): void {
    if (this.isMobile) {
      this.isVisible$ = this.companies.map((company) => new Observable((observer) => {
        const intersectionObserver: IntersectionObserver = new IntersectionObserver((entries) => {
          observer.next(entries[0].isIntersecting)
        }, {threshold: 0.7})
        intersectionObserver.observe(company.nativeElement)
        return () => {
          intersectionObserver.disconnect()
        }
      }))

    }
  }
  
  goBack() {
    this._router.navigate(["/home"], { queryParams: { showAnimation: false } })
  }
}
