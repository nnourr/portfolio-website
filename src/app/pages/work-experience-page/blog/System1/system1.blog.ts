import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../../models/blog.model';
import { DarkModeService } from '../../../../services/dark-mode.service';
import { WorkExperienceDetails } from '../../../../models/work-experience-details.model';

@Component({
  selector: 'app-system1-blog',
  templateUrl: './system1.blog.html',
})
export class System1BlogComponent {
  blogContent: Blog = {
    bannerImage: 'assets/system1-banner.jpg',
    date:'September 2022 - December 2022',
    title: 'System1',
    titleUrl: 'https://www.system1.com',
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
      'For my Fall 2022 Co-Op placement, I worked with System1 as a <u>Full Stack Software Engineer</u>. During this time, I was working with <u>Angular</u> on the frontend, <u>.NET</u> on the backend and <u>Snowflake</u> for the database. I worked in multiple <u>Agile teams</u>, making extensive use of <u>JIRA</u> and <u>Slack</u> for communication.',
    aboutEmployer:
      'System1 combines best-in-class technology & data science to operate the most dynamic <u>Responsive Acquisition Marketing Platform (RAMP)</u>. This allows them to to build <u>powerful brands</u> across multiple <u>consumer verticals</u>, develop & grow our suite of <u>privacy-focused products</u>, and deliver <u>high-intent customers</u> to their advertising partners.',
    learningGoals: [
      'See how <u>popular programming frameworks</u> like Angular and .NET work differently when used in <u>production environments</u> as opposed to personal/small projects.',
      'Gain experience with Slack, Jira and other <u>professional tools for programming communication</u>.',
      'Be able to work effectively in a <u>programming team</u> working on a <u>production project</u>.',
    ],
    learningGoalsReflection:
      'My goals for this work term are mostly focused on the <u>soft skills</u> of working as a Software Engineer as opposed to technical goals. This is because I am confident in my ability to learn technical concepts, but I was unsure about my application in a <u>real-world working environment</u>. From my experience these skills are also more valued by employers, meaning they will be vital for my next work term and continued career',
    experience: [
      {
        body:`My experience at System1 was <u>fast-paced</u>, <u>technical</u> and <u>highly resourceful</u>. My first task involved creating <u>JIRA tickets</u> from a spreadsheet created during a BugBash. Within my first ticket I learnt about <u>RXJS Observables</u> as well as <u>service dependency injection</u>, immediately improving my knowledge about <u>professional Angular development</u>.<br><br>

        Not much later I took on a ticket involving changes on the full stack, meaning I was interacting with not only Angular on the frontend, but also <u>.NET</u> and <u>Snowflake</u> for the first time. This change involved modifying an existing query to <u>join data</u> from a new table, then modifying the <u>.NET API endpoint</u> and frontend to reflect the changes. Despite adding a new table to the query, me and supervisor found a way to make the query run <u>30-40% faster</u> by removing other redundant joins.<br><br>

        Another memorable ticked involved me <u>preventing cyber attacks</u> by improving the <u>file validation</u> on the frontend and backend. On the Angular side, I developed a new component in an internal shared library, which made use of <u>Angular FormControl</u>. This gave me a little bit of experience developing <u>NPM Packages</u> as well as <u>custom Form Control validation</u>. For the backend, I developed an <u>injectable service</u> that works with <u>IFormFile</u> objects. It checks the file extension, content-type and <u>file header bytes</u> of the IFormFile to make sure that it is the correct type. In order to make sure the code is as <u>reusable</u> and <u>extendable</u> as possible, I made use of the <u>strategy pattern</u> to deicide what it would use to validate based on the file type. All a developer would have to do to add a new file type for validation is add a new FileType value, <u>with no changes made to service itself</u>.<br><br>

        During my term, I <u>presented my work</u> to the whole dev team on two separate occasions, and received <u>special recognition for my work</u>`
      }
    ],
    conclusion:
      'My Fall 2022 work term could not have been more impactful. It exposed me to countless new experiences that will surely form the rest of my professional career. On the technical side, I improved my <u>Angular proficiency</u> to a <u>professional standard</u>, exposed me to <u>.NET</u> for the first time and taught me the <u>subtleties of high-performance SQL queries</u>. The work done on my soft skills have been even more impactful in my opinion, greatly <u>improving my technical communication skills</u> and my <u>confidence in an office environment</u>. I was able to <u>meet my goals</u> and could not have been happier.',
    acknowledgments:
      'I would to give a special thank you to team members Chris Dekker, Matt Potts and Darren Laser for the incredible support they gave me the entire term (not to mention all the PR comments), as well as Babak Hajiahmadi for his on boarding and the entire dev team for making me at home in their company.',
  }

  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }
 
}
