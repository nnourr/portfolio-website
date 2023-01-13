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
    reference: "chris.dekker@system1.com",
    date: "Sept 2022 - Dec 2022 (4 months)",
    position: "Full Stack Software Engineer Co-Op",
    tech: "Angular, .NET, Snowflake",
    highlights: ["Recognized for my fast learning on a large production project using cutting-edge Angular and .NET patterns.",
  "Thrived in fast Agile teams, using Jira and Slack to ensure efficient communication in a remote setting."],
    details: {
      introduction: 'For my Fall 2022 Co-Op placement, I worked with System1 as a <span class="underline"> Full Stack Software Engineer</span>. During this time, I was working with <span class="underline">Angular</span> on the frontend, <span class="underline">.NET</span> on the backend and <span class="underline">Snowflake</span> for the database. I worked in multiple <span class="underline">Agile teams</span>, making extensive use of <span class="underline">JIRA</span> and <span class="underline">Slack</span> for communication.',
      aboutEmployer: 'System1 combines best-in-class technology & data science to operate the most dynamic <span class="underline">Responsive Acquisition Marketing Platform (RAMP)</span>. This allows them to to build <span class="underline">powerful brands</span> across multiple <span class="underline">consumer verticals</span>, develop & grow our suite of <span class="underline">privacy-focused products</span>, and deliver <span class="underline">high-intent customers</span> to their advertising partners.',
      learningGoals: ['See how <span class="underline">popular programming frameworks</span> like Angular and .NET work differently when used in <span class="underline">production environments</span> as opposed to personal/small projects.', 
      'Gain experience with Slack, Jira and other <span class="underline">professional tools for programming communication</span>.',
      'Be able to work effectively in a <span class="underline">programming team</span> working on a <span class="underline">production project</span>.'],
      learningGoalsReflection: 'My goals for this work term are mostly focused on the <span class="underline">soft skills</span> of working as a Software Engineer as opposed to technical goals. This is because I am confident in my ability to learn technical concepts, but I was unsure about my application in a <span class="underline">real-world working environment</span>. From my experience these skills are also more valued by employers, meaning they will be vital for my next work term and continued career',
      experience: 'My experience at System1 was <span class="underline">fast-paced</span>, <span class="underline">technical</span> and <span class="underline">highly resourceful</span>. My first task involved creating <span class="underline">JIRA tickets</span> from a spreadsheet created during a BugBash. Within my first ticket I learnt about <span class="underline">RXJS Observables</span> as well as <span class="underline">service dependency injection</span>, immediately improving my knowledge about <span class="underline">professional Angular development</span>.<br><br>'
      +'Not much later I took on a ticket involving changes on the full stack, meaning I was interacting with not only Angular on the frontend, but also <span class="underline">.NET</span> and <span class="underline">Snowflake</span> for the first time. This change involved modifying an existing query to <span class="underline">join data</span> from a new table, then modifying the <span class="underline">.NET API endpoint</span> and frontend to reflect the changes. Despite adding a new table to the query, me and supervisor found a way to make the query run <span class="underline">30-40% faster</span> by removing other redundant joins.<br><br>'
      +'Another memorable ticked involved me <span class="underline">preventing cyber attacks</span> by improving the <span class="underline">file validation</span> on the frontend and backend. On the Angular side, I developed a new component in an internal shared library, which made use of <span class="underline">Angular FormControl</span>. This gave me a little bit of experience developing <span class="underline">NPM Packages</span> as well as <span class="underline">custom Form Control validation</span>. For the backend, I developed an <span class="underline">injectable service</span> that works with <span class="underline">IFormFile</span> objects. It checks the file extension, content-type and <span class="underline">file header bytes</span> of the IFormFile to make sure that it is the correct type. In order to make sure the code is as <span class="underline">reusable</span> and <span class="underline">extendable</span> as possible, I made use of the <span class="underline">strategy pattern</span> to deicide what it would use to validate based on the file type. All a developer would have to do to add a new file type for validation is add a new FileType value, <span class="underline">with no changes made to service itself</span>.<br><br>'
      +'During my term, I <span class="underline">presented my work</span> to the whole dev team on two separate occasions, and received <span class="underline">special recognition for my work</span>',
      conclusion: 'My Fall 2022 work term could not have been more impactful. It exposed me to countless new experiences that will surely form the rest of my professional career. On the technical side, I improved my <span class="underline">Angular proficiency</span> to a <span class="underline">professional standard</span>, exposed me to <span class="underline">.NET</span> for the first time and taught me the <span class="underline">subtleties of high-performance SQL queries</span>. The work done on my soft skills have been even more impactful in my opinion, greatly <span class="underline">improving my technical communication skills</span> and my <span class="underline">confidence in an office environment</span>. I was able to <span class="underline">meet my goals</span> and could not have been happier.',
      acknowledgments: 'I would to give a special thank you to team members Chris Dekker, Matt Potts and Darren Laser for the incredible support they gave me the entire term (not to mention all the PR comments), as well as Babak Hajiahmadi for his on boarding and the entire dev team for making me at home in their company.'
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
      conclusion: 'My Summer 2022 work term experience was extremely positive to my future work. It was crucial to my understanding of the role of <span class="underline">best practices</span> in production environments, as well as in developing my <span class="underline">web app experience</span>.',
      acknowledgments: 'I would to give a special thank you to my supervisors Mohammed Nasser and Emad Samir for their continued assistance during and after my work term. They guided me effectively through the new challenges I had to face during this work term.'
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
