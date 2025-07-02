import Background from './components/Background';
import QuickButton from './components/QuickButton';
import Section from './components/Section';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import { useScrollHandler } from './hooks/useScrollHandler';
import BottomBar from './components/BottomBar';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  useScrollHandler();

  return (
    <Background className={`font-courier pb-24`}>
      <NavBar />
      <BottomBar />
      {/* top bar */}
      <TopBar />
      {/* main content */}
      <div className="text-contrast inset-shadow-glow dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-sm md:w-3xl dark:backdrop-blur-xs">
        <div className="after:inset-shadow-glow animate-in fade-in relative overflow-hidden rounded-2xl opacity-90 duration-400 after:absolute after:top-0 after:left-0 after:h-full after:w-full">
          <img
            src="/headshotcropped.png"
            alt="me"
            className="h-44 w-full object-cover"
          />
        </div>
        <p className="animate-in fade-in w-full text-xl font-bold duration-400">
          A Software Engineering graduate with 3 years of experience doing what
          I love.
        </p>
        <div className="group/button animate-in fade-in flex w-fit flex-col gap-2 duration-400">
          <QuickButton
            className="group-hover/button:opacity-60 hover:!opacity-100"
            onClick={() => {
              window.open('/Noureldeen_Ahmed_Resume.pdf', '_blank');
            }}
          >
            view resume
          </QuickButton>
          <QuickButton
            className="group-hover/button:opacity-60 hover:!opacity-100"
            onClick={() => {
              window.location.href = '#work-exp';
            }}
          >
            work experience
          </QuickButton>
          <QuickButton
            className="group-hover/button:opacity-60 hover:!opacity-100"
            onClick={() => {
              window.location.href = '#passion-proj';
            }}
          >
            passion projects
          </QuickButton>
        </div>
        <Section title="about me" className="animate-in fade-in duration-400">
          <div className="flex flex-col gap-2 text-sm">
            <p>
              I'm a builder, tinkerer, and full-stack developer who loves
              turning wild ideas into real, working software. I've helped teams
              ship subscription flows handling $150,000+ in annual revenue,
              innovative AI-based learning platforms and cybersecurity
              dashboards.
            </p>
            <p>
              Recently, I built Plant Together, the Google Docs of Software
              Design tools, used by 50+ classmates for 50+ designs.
            </p>
            <p>
              No matter what I'm working on, I'm all about fast feedback, clean
              code, and having fun.
            </p>
          </div>
        </Section>
        <Section
          title="work experience"
          id="work-exp"
          className="animate-in fade-in duration-400"
        >
          <div className="mt-4 flex flex-col gap-2">
            <Experience
              logoSrc={'/lmai.svg'}
              company={'LearningModeAI'}
              companyLink={'https://learningmodeai.com'}
              position={'Founding Engineer'}
              startDate={'Jan 2025'}
              endDate={'present'}
            >
              <p>
                LearningModeAI is revolutionizing asynchronous learning with AI.
                As a Founding Engineer, I built a scalable microservice
                architecture using AWS, Redis, and Docker. During this time, I
                mentored six junior developers by leading code reviews and
                organizing regular knowledge-sharing sessions.
              </p>
            </Experience>
            <Experience
              logoSrc={'/ecobee.svg'}
              company={'ecobee'}
              position={'Software Engineer Co-Op'}
              startDate={'Jan 2024'}
              endDate={'Aug 2024'}
              companyLink={'https://ecobee.com'}
            >
              <p>
                At ecobee, I wrote Go services to enable smart lock support for
                1000s of users and launch product bundles, delivering $2M+ in
                annual revenue. I improved our GCP infrastructure to reduce
                staging costs by 20%, organized team-wide release discussions
                that cut on-call incidents by 70%, and led sprints as SCRUM
                master where I introduced rituals that cut incomplete epics by
                40%.
              </p>
            </Experience>
            <Experience
              logoSrc={'/rbc.svg'}
              company={'Royal Bank of Canada'}
              position={'Cyber Security Developer Co-Op'}
              startDate={'May 2023'}
              endDate={'Aug 2023'}
              companyLink={'https://rbc.com'}
            >
              <p>
                While at RBC, I worked on a brand new cyber security resilience
                dashboard. I developed a Django REST API to support it's
                data-driven features and implemented DRF-Spectacular to
                auto-generate accurate documentation. On the frontend, I built
                8+ Vue.js components, including a Priority Tag used to flag
                critical issues, and created a mock data API using Faker for
                realistic, end-to-end testing of complex data ingestion
                pipelines.
              </p>
            </Experience>
            <Experience
              logoSrc={'/system1.svg'}
              company={'System1'}
              position={'Full Stack Web Developer Co-Op'}
              startDate={'Sept 2022'}
              endDate={'Dec 2022'}
              companyLink={'https://system1.com'}
            >
              <p>
                During my time at System1, I worked on a full stack Angular and
                .NET advertising platform and improved backend performance by
                optimizing Snowflake queries, cutting response times by up to
                40%. I created a reusable, end-to-end file validation system
                that prevented cyber attacks across the full stack.
              </p>
            </Experience>
            <Experience
              logoSrc={'/ebc.svg'}
              company={'Egyptian Banks Company'}
              position={'Full Stack Web Developer Co-Op'}
              startDate={'Sept 2022'}
              endDate={'Dec 2022'}
              companyLink={'https://www.egyptianbanks.com/'}
            >
              <p>
                For EBC, I built a model Automatic Clearing House system to
                manage electronic bank transactions between financial
                institutions. I developed the full stack using Java Spring Boot,
                Angular, and SQL Server. This project helped me strengthen my
                understanding of production-level engineering practices,
                especially around REST API design, DTO/entity modeling, and
                test-driven development.
              </p>
            </Experience>
          </div>
        </Section>
        <Section
          title="education"
          id="education"
          className="animate-in fade-in duration-400"
        >
          <Experience
            company="University of Guelph"
            position="Bachelor of Computing"
            startDate="2020"
            endDate="2025"
            companyLink="https://uoguelph.ca"
            logoSrc="/uog.svg"
          >
            <ul className="marker:text-accent list-inside list-disc">
              <li>Major in Software Engineering</li>
              <li>Minor in Project Management</li>
              <li>Graduated with Honors</li>
              <li>GPA: 3.7/4.0</li>
            </ul>
          </Experience>
        </Section>
        <Skills className="animate-in fade-in duration-400" />
        <Section
          title="passion projects"
          id="passion-proj"
          className="animate-in fade-in duration-400"
        >
          <span>this is my favorite section :)</span>
          <div className="mt-4 flex flex-col gap-2">
            <Experience
              logoSrc={'/lmai.svg'}
              company={'LearningModeAI'}
              companyLink={'https://learningmodeai.com'}
              position={'Founding Engineer'}
              startDate={'Jan 2025'}
              endDate={'present'}
            >
              <p>
                LearningModeAI is revolutionizing asynchronous learning with AI.
                As a Founding Engineer, I built a scalable microservice
                architecture using AWS, Redis, and Docker. During this time, I
                mentored six junior developers by leading code reviews and
                organizing regular knowledge-sharing sessions.
              </p>
            </Experience>
          </div>
        </Section>
      </div>
    </Background>
  );
}

export default App;
