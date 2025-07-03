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
      <div className="text-contrast bg-secondary/40 dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-md md:w-3xl dark:backdrop-blur-xs">
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
              I'm a builder, tinkerer, and <strong>full-stack developer</strong>{' '}
              who loves turning wild ideas into real, working software. I've
              helped teams ship subscription flows handling{' '}
              <strong>$2M+</strong> in annual revenue, innovative{' '}
              <strong>AI-based learning platforms</strong> and{' '}
              <strong>cybersecurity dashboards</strong>.
            </p>
            <p>
              No matter what I'm working on, I'm all about{' '}
              <strong>fast feedback</strong>, <strong>clean code</strong>, and
              having fun.
            </p>
          </div>
        </Section>
        <Section
          title="work experience"
          id="work-exp"
          className="animate-in fade-in duration-400"
        >
          <div className="mt-2 flex flex-col gap-2">
            <Experience
              logoSrc={'/lmai.svg'}
              company={'LearningModeAI'}
              companyLink={'https://learningmodeai.com'}
              position={'Founding Engineer'}
              startDate={'Jan 2025'}
              endDate={'present'}
            >
              <ul className="marker:text-accent list-inside list-none">
                <li>
                  Built an innovative learning platform with <strong>Go</strong>
                  , <strong>AWS</strong>, <strong>React</strong>,{' '}
                  <strong>Redis</strong>, <strong>Docker</strong>
                </li>
              </ul>
            </Experience>
            <Experience
              logoSrc={'/ecobee.svg'}
              company={'ecobee'}
              position={'Software Engineer Co-Op'}
              startDate={'Jan 2024'}
              endDate={'Aug 2024'}
              companyLink={'https://ecobee.com'}
            >
              <ul className="marker:text-accent list-inside list-none">
                <li>
                  Delivered <strong>$2M+</strong> in annual revenue.
                </li>
                <li>
                  Cut on-call incidents by <strong>70%</strong>.
                </li>
                <li>
                  Reduced staging costs by <strong>20%</strong>.
                </li>
              </ul>
            </Experience>
            <Experience
              logoSrc={'/rbc.svg'}
              company={'Royal Bank of Canada'}
              position={'Cyber Security Developer Co-Op'}
              startDate={'May 2023'}
              endDate={'Aug 2023'}
              companyLink={'https://rbc.com'}
            >
              <ul className="marker:text-accent list-inside list-none">
                <li>
                  Built <strong>8+ scalable Vue</strong> components.
                </li>
                <li>
                  Developed data-driven <strong>Django APIs</strong>.
                </li>
              </ul>
            </Experience>
            <Experience
              logoSrc={'/system1.svg'}
              company={'System1'}
              position={'Full Stack Web Developer Co-Op'}
              startDate={'Sept 2022'}
              endDate={'Dec 2022'}
              companyLink={'https://system1.com'}
            >
              <ul className="marker:text-accent list-inside list-none">
                <li>
                  Cut query times by <strong>40%</strong>
                </li>
                <li>
                  Built end-to-end <strong>file validation</strong>.
                </li>
              </ul>
            </Experience>
            <Experience
              logoSrc={'/ebc.svg'}
              company={'Egyptian Banks Company'}
              position={'Full Stack Web Developer Co-Op'}
              startDate={'Sept 2022'}
              endDate={'Dec 2022'}
              companyLink={'https://www.egyptianbanks.com/'}
            >
              <ul className="marker:text-accent list-inside list-none">
                <li>
                  Built an <strong>ACH system</strong> for banks.
                </li>
              </ul>
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
            className="mt-2"
          >
            <ul className="marker:text-accent list-inside list-none">
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
                <strong>LearningModeAI</strong> is revolutionizing asynchronous
                learning with <strong>AI</strong>. As a{' '}
                <strong>Founding Engineer</strong>, I built a scalable{' '}
                <strong>microservice architecture</strong> using{' '}
                <strong>AWS</strong>, <strong>Redis</strong>, and{' '}
                <strong>Docker</strong>. During this time, I mentored{' '}
                <strong>six junior developers</strong> by leading code reviews
                and organizing regular knowledge-sharing sessions.
              </p>
            </Experience>
          </div>
        </Section>
      </div>
    </Background>
  );
}

export default App;
