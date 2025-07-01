import Background from './components/Background';
import QuickButton from './components/QuickButton';
import Section from './components/Section';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import { useScrollStore } from './stores/scrollStore';
import { useScrollHandler } from './hooks/useScrollHandler';

function App() {
  const { isScrolling, showTopBar } = useScrollStore();
  useScrollHandler();

  return (
    <Background className={`font-courier pb-24`}>
      <Nav hide={isScrolling} />
      {/* top bar */}
      <TopBar showTopBar={showTopBar} />
      {/* main content */}
      <div className="text-contrast inset-shadow-glow dark:inset-shadow-glow/20 mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-xs">
        <div className="after:inset-shadow-glow animate-in fade-in relative overflow-hidden rounded-2xl opacity-90 duration-400 after:absolute after:top-0 after:left-0 after:h-full after:w-full">
          <img
            src="/headshotcropped.png"
            alt="me"
            className="h-44 w-full object-cover"
          />
        </div>
        <p className="animate-in fade-in text-xl font-bold duration-400">
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
          <QuickButton className="group-hover/button:opacity-60 hover:!opacity-100">
            work experience
          </QuickButton>
          <QuickButton className="group-hover/button:opacity-60 hover:!opacity-100">
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
      </div>
    </Background>
  );
}

export default App;
