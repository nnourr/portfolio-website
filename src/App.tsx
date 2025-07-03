import Background from './components/Background';
import QuickButton from './components/QuickButton';
import Section from './components/Section';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import { useScrollHandler } from './hooks/useScrollHandler';
import BottomBar from './components/BottomBar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import { Separator } from './components/ui/separator';
import { faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  useScrollHandler();

  return (
    <Background className={`font-courier pb-24`}>
      <NavBar />
      <BottomBar />
      {/* top bar */}
      <TopBar />
      {/* main content */}
      <div className="text-contrast bg-secondary/40 dark:bg-secondary/20 dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-md md:w-3xl dark:backdrop-blur-xs">
        <div className="after:inset-shadow-glow animate-in fade-in relative rounded-2xl opacity-90 shadow-md duration-400 ease-in-out after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-2xl active:scale-95">
          <img
            src="/headshotcropped.png"
            alt="me"
            className="h-44 w-full rounded-2xl object-cover"
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
        <Separator className="mx-auto w-3/4!" />
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
        <Separator className="mx-auto w-3/4!" />
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
        <Separator className="mx-auto w-3/4!" />
        <Skills className="animate-in fade-in duration-400" />
        <Separator className="mx-auto w-3/4!" />
        <Section
          title="passion projects"
          id="passion-proj"
          className="animate-in fade-in duration-400"
        >
          <span>this is my favorite section :)</span>
          <div className="mt-4 flex flex-col gap-3">
            <Project
              title="Plant Together"
              startDate="Jan 2025"
              endDate="May 2025"
              imageSrc="/planttogether.png"
              imageAlt="Plant Together application interface"
              techStack={[
                'React',
                'ExpressJS',
                'PostgreSQL',
                'Redis',
                'Docker',
                'Yjs',
                'Tailwind',
              ]}
              links={[
                {
                  label: 'github',
                  url: 'https://github.com/nnourr/plant-together',
                  icon: faGithub,
                },
                {
                  label: 'blog',
                  url: 'https://blog.example.com',
                  icon: faFileAlt,
                },
                {
                  label: 'website',
                  url: 'https://plant-together.nnourr.tech',
                  icon: faGlobe,
                },
              ]}
            >
              <p>
                The Google Docs of Software Design. Collaboratively create UML
                diagrams using PlantUML, in real-time.
              </p>
              <p>
                Used by <strong>50+</strong> students for <strong>300+</strong>{' '}
                designs.
              </p>
            </Project>
            <Project
              title="Music Circle"
              startDate="May 2024"
              endDate="Aug 2024"
              imageSrc="/musiccircle.png"
              imageAlt="Music Circle"
              techStack={[
                'React',
                'ExpressJS',
                'GCP Run',
                'Docker',
                'Firebase',
                'Tailwind',
                'Spotify API',
              ]}
              links={[
                {
                  label: 'github',
                  url: 'https://github.com/nnourr/plant-together',
                  icon: faGithub,
                },
                {
                  label: 'blog',
                  url: 'https://blog.example.com',
                  icon: faFileAlt,
                },
                {
                  label: 'website',
                  url: 'https://plant-together.nnourr.tech',
                  icon: faGlobe,
                },
              ]}
            >
              <p>
                Curious what your friends actually listen to? Music Circle
                extracts everyone's music taste to reveal what you really have
                in common.
              </p>
            </Project>
            <Project
              title="ML Content Pipeline"
              startDate="Mar 2021"
              endDate="Jun 2021"
              imageSrc="/rocketleagueimg.jpg"
              imageAlt="Rocket League"
              techStack={[
                'Python Flask',
                'Google Cloud',
                'Docker',
                'Firebase',
                'Pandas',
                'OpenCV',
                'Selenium',
                'Reddit API',
              ]}
              links={[
                {
                  label: 'github',
                  url: 'https://github.com/nnourr/RLTikTok_EditVideo',
                  icon: faGithub,
                },
                {
                  label: 'blog',
                  url: 'https://blog.example.com',
                  icon: faFileAlt,
                },
                {
                  label: 'tiktok',
                  url: 'https://www.tiktok.com/@supersonic__legend',
                  icon: faTiktok,
                },
              ]}
            >
              <p>
                Automated, 24/7 TikTok content creation pipeline. Uses ML to
                transform Rocket League replays into engaging, viral clips.
              </p>
            </Project>
            <Project
              title="Explore NASA"
              startDate="Jan 2022"
              imageSrc="/explorenasa.png"
              imageAlt="Explore NASA"
              techStack={['React', 'netlify', 'NASA API']}
              links={[
                {
                  label: 'github',
                  url: 'https://github.com/nnourr/Explore-NASA',
                  icon: faGithub,
                },
                {
                  label: 'website',
                  url: 'https://explore-nasa.netlify.app/',
                  icon: faGlobe,
                },
              ]}
            >
              <p>Explore NASA's vast collection of images and videos.</p>
            </Project>
          </div>
        </Section>
      </div>
    </Background>
  );
}

export default App;
