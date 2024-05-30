import { WorkExperienceInfo } from "src/app/models/work-experience-info.model"

export const Images = {
  ecobee: { light: 'assets/ecobee-light.png', dark: 'assets/ecobee-dark.png' },
  rbc: { light: 'assets/rbc-color.png', dark: 'assets/rbc-dark.png' },
  system1: { light: 'assets/system1-logo.svg', dark: 'assets/system1-logo-dark.svg' },
  ebc: { light: 'assets/ebc-logo.png', dark: 'assets/ebc-logo-dark.png' },
}

export const WorkExperience: WorkExperienceInfo[] = [
    {
      image: Images.ecobee.light,
      imageDarkMode: Images.ecobee.dark,
      companyUrl: 'https://www.ecobee.com/',
      companyName: 'ecobee',
      date: 'Jan 2024 - Aug 2024 (8 months)',
      position: 'Backend Software Engineer Co-Op',
      tech: 'Go, Nestjs, GKE, nginx',
      highlights: [
        'Lead a multi-faceted GKE upgrade, cooperating with my team to manage risk on a tight deadline.',
        'Took initiative to orchestrate team-wide discussions and implement process changes to improve developer QoL and production stability.',
        'Created ADRs to investigate known bugs, involving identification of the root-cause, presenting solutions and discussing action items with the team',
      ],
      details: {
        introduction: 'At ecobee, I was as a <u>Software Engineer</u> on the Home Monitoring Backend (HMB) team for 8 months, starting from January 2024 until August 2024. The HMB team is responsible for developing the <u>backend services</u> for ecobee\'s <u>home security</u> projects. This work term report will cover the <u>first 4 months</u> of my employment during the winter semester.',
        aboutEmployer: 'ecobee is a <u>eco-friendly smart home company</u>, aiming to create products that promote <u>comfort, security and sustainability</u>. They started with just thermostats, but have now introduced an <u>indoor camera, smart doorbell and various sensors</u> to compose their home monitoring division.',
        learningGoals: ['Learn more about software architecture and infrastructure in a complex, hexagonal context', 'Improve my leadership by leaving a positive impact on the team\'s culture or processes', 'Become comfortable with the Go programming language'],
        learningGoalsReflection: `While architecture and infrastructure are distinct parts of software engineering, they collaborate closely, especially at ecobee with its interconnected devices. This made delving into this topic my first goal.
        Secondly, the HMB team's collaborative and positive environment presented a perfect opportunity to hone my leadership skills and make an impact.
        Lastly, I aimed to learn Go, the primary language for HMB's services.`,
        experience: [
          { 
            heading: 'Miro and Architecture Overview',
            body:  `I started my HMB journey in a meeting with my "onboarding buddy" and sprint lead, getting to know each other and mapping out a very high level overview of ecobee's architecture in Miro. This Miro board evolved over the course of my term, and diagraming in general has proven to be one of the most helpful skills I've developed this term.
            It was also around this time that I started learning go using the extremely helpful <a href='https://gobyexample.com' target='_blank'>gobyexample.com</a>, and by the time I received my first ticket, I was already relatively familiar with this programming language.`
          },
          { 
            heading: 'Bug Fixes and Architecture Decision Records',
            body: `This ticket was to investigate and fix a bug brought to our attention by one of our customers, and it immediately challenged me to grasp the nitty-gritty details of our pub-sub based event-driven architecture.
            Ultimately, after some thorough investigation and some back and fourth with my onboarding buddy, we concluded that the bug is not as simple as we though but will in fact require a sizeable system redesign to fix. 
            I was then tasked with creating an Architecture Decision Record (ADR) to document the problem, containing context, reproduction steps and details on the root cause. 
            I then documented our simple and straightforward options, and why none of them work. The ADR ended with an inspirational proposal to restructure this particular flow to fix the root cause of the problem and improve our user experience. 
            This ADR was presented at our weekly "Tech Topics", an open forum where the team discusses things we've been working on. 
            Ultimately however, we decided that the scope of the change was rather large and so I created a Jira epic to address the issue and we left it at that.`
          },
          {
            heading: 'GKE Upgrades',
            body: `At the time, we were running an outdated version of Google Kubernetes Engine (GKE), Google's Kubernetes management service. I had not worked with Kubernetes before, so this was an exciting opportunity to address my software infrastructure goal and learn something new. 
            Thankfully I was paired with a teammate who had a lot more experience with GKE, but we both still had a lot to learn. In order to perform this upgrade we needed to upgrade our NGINX-ingress, identify deprecated GKE APIs (such as the v1beta2 version of HPA), upgrade them and then perform the upgrade for each of our clusters.
            We also wrote upgrade plan documents for each step of the process, providing team members with context, a detailed list of steps for us and future maintainers to reference, a risk assessment and a rollback plan in case things go south. 
            Writing these documents enforced a deep understanding of GKE and it's inner workings. To aid our upgrade process we also took advantage of various metrics, both built into Google Cloud and other collected through Prometheus and displayed on Grafana. 
            These metrics, combined with testing the upgrades on our staging environment gave us ample information to provide a detailed and informed assessment of the upgrade's intended outcome, health and signs of failure.<br><br>
          `},
          {
            heading: 'Leadership and Team Process',
            body: `It was during my GKE upgrade task that I got my first leadership opportunity. At ecobee, "on-call members" guard the health of our services, receiving alerts outside business hours in times of instability. 
            As a result, they are heavily affected by the health of our production environments. 
            In a handover meeting, an upcoming on-call member expressed concerns about an NGINX upgrade, citing unfamiliarity with the process, unclear risks, and lack of confidence in our rollback command. 
            Recognizing this as a communication issue, I organized meetings to address it. We focused on verifying changes for production, supporting on-call staff, and improving release communication. 
            The result was a comprehensive document with strategies to enhance communication and support, including using Outlook for non-blocking event notifications, visible metrics, and up-to-date runbooks.<br><br>

            Since then, our on-call and release process has significantly improved, leading to higher satisfaction among our team, a more stable production environment, and happier customers!`
          }, {
            heading: 'Large New Initiative',
            body: `During the GKE Upgrade cycle, a new project had started HMB was in charge of. This was an entirely new initiative, spanning across many teams throughout the organization. As this project was so large, we needed an extensive plan, including 
            a system design to integrate all the various moving parts. Being part of the design discussion, I gained greater insight into the technical and communicative challenges involved in such a wide spanning project. We spent hours in a room whiteboarding
            our architecture, considering the main project as well as how it will integrate with our business reporting, website and customer support.<br><br>
            
            We then got started on the project, specifically amending a service owned by another team. This service is written in TypeScript using NESTjs, a NODEjs backend framework. 
            I got started on the Repo layer of its hexagonal architecture, writing entities, DTOs and services for our new objects. I then moved to the Transport layer, modifying a webhook controller to add our new desired functionality.
            This involved building providers to support our changes, as well as an extensive suite of unit and end-to-end tests written in Jest, achieving 100% code coverage.
            My code was written with an emphasis on effective and helpful error and handling and reporting, allowing potential problems to be identified and remediated in production environments.`
          }
        ],
        conclusion: `In conclusion, I'm very proud of my co-op term at ecobee. In it's intensely multifaceted environment, I was constantly challenged with complex technical and communicative problems. While I was unable to gain GO programming experience, 
        I was compensated in infrastructure deep-dives and immense leadership opportunities. I'm proud of the impact I've had on our process, as well as my contributions to our GKE upgrade documentation. Most of all, I'm proud to have a voice,
        always speaking at team retros, organizing events with my fellow co-ops, reviewing PRs and making suggestions. This work term, I not only became a better developer, but also a better employee and team-member`,
        acknowledgments: `First of all, thank you Genia, my manager, for being the blinding beacon of inspiration that you are. I would not have had the impact I did if it wasn't for your leadership.
        Thank you Pray, my on-boarding buddy, for your relentless understanding of everything ecobee has ever done expressed exclusively and exquisitely in Miro boards.
        Thank you Anton, every time we huddled I came out feeling like a more capable and well-rounded developer.
        Thank you Chen for dealing with me throughout the GKE upgrade and having my back every time I take staging down on accident.
        Thank you Judy for being the only Beaver in the office during the new office party.`
      }
    },
    {
      image: Images.rbc.light,
      imageDarkMode: Images.rbc.dark,
      customImageStyle: 'width: 60%;',
      companyUrl: 'https://www.rbc.com/about-rbc.html',
      companyName: 'Royal Bank of Canada',
      reference: 'evan.timms@rbc.com',
      date: 'May 2023 - Aug 2023 (4 months)',
      position: 'Applications Developer Co-Op',
      tech: 'Python Django, Vue.js, Tailwind',
      highlights: [
        'Architected RESTful API endpoints, wrote Database Migrations, and configured CI/CD Pipelines using Django REST',
        'Collaborated with PMs and POs to refine requirements into Jira Releases, Epics and Stories in a fast agile environment',
        'Built entire features from the ground up, starting with Figma Design then Data Ingestion then API then Vue front-end',
      ],
      details: {
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
      },
    },
    {
      image: Images.system1.light,
      imageDarkMode: Images.system1.dark,
      companyUrl: 'https://system1.com/',
      companyName: 'System1',
      reference: 'chris.dekker@system1.com',
      date: 'Sept 2022 - Dec 2022 (4 months)',
      position: 'Full Stack Software Engineer Co-Op',
      tech: 'Angular, .NET, Snowflake',
      highlights: [
        'Recognized for my fast learning on a large production project using cutting-edge Angular and .NET patterns',
        'Optimized SQL queries to cut down on response time by 30-40%',
        'Thrived in fast Agile teams, using Jira and Slack to ensure efficient remote communication',
      ],
      details: {
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
      },
    },
    {
      image: Images.ebc.light,
      imageDarkMode: Images.ebc.dark,
      customImageStyle: 'width: 40%;',
      companyUrl: 'https://www.egyptianbanks.com/',
      companyName: 'Egyptian Banks Company',
      date: 'May 2022 - Aug 2022 (4 months)',
      position: 'Full Stack Software Engineer Co-Op',
      tech: 'Angular, Java Spring, MSSQL',
      highlights: [
        'Developed a model Automated Clearing House (ACH) system using Java and MSSQL',
        'Proficiently applied industry-standard programming practices and Test-Driven-Design to ensure code quality',
        'Transformed the ACH model into a web-app using Spring Boot and Angular',
      ],
      details: {
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
      },
    },
]