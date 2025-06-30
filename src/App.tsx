import { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import QuickButton from './components/QuickButton';
import Section from './components/Section';

function App() {
  const [active, setActive] = useState(false);
  const [showTopBar, setShowTopBar] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  console.log(active);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      const titlePos = titleRef.current?.getBoundingClientRect().bottom;

      // Trigger dark mode when user scrolls past 50% of the page
      if (titlePos + 20 < 0) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [titleRef.current]);

  return (
    <Background className={`${active && 'dark'} font-courier`}>
      {/* top bar */}
      <div className={`fixed top-0 left-0 z-10 w-full`}>
        <div
          className={`transform transition-all duration-300 ease-out ${showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} text-contrast m-auto my-4 flex h-fit w-[98%] items-center gap-2 rounded-xl px-4 py-2 shadow-xl inset-shadow-sm inset-shadow-white/20 outline-1 outline-white/10 backdrop-blur-xs`}
        >
          <h1 className="decoration-accent w-min text-2xl font-black text-nowrap underline">
            Noureldeen Ahmed
          </h1>
          <div className="bg-accent text-accent h-6 w-full rounded-full decoration-0" />
        </div>
      </div>
      <div className="inset-shadow-glow text-contrast m-auto my-4 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-3xl px-4 py-3 backdrop-blur-xs">
        <h1 className="w-min text-5xl font-black" ref={titleRef}>
          <span className="decoration-accent underline">Noureldeen</span>
          <div className="flex items-center gap-2">
            <h1 className="decoration-accent w-fit text-5xl underline">
              Ahmed
            </h1>
            <div className="bg-accent text-accent h-8 w-full rounded-full decoration-0">
              -
            </div>
          </div>
        </h1>
        <div className="after:inset-shadow-glow relative overflow-hidden rounded-2xl opacity-90 after:absolute after:top-0 after:left-0 after:h-full after:w-full">
          <img
            src="/headshotcropped.png"
            alt="me"
            className="h-44 w-full object-cover"
          />
        </div>
        <p className="text-xl font-bold">
          A Software Engineering graduate with 3 years of experience doing what
          I love.
        </p>
        <div className="group/button flex w-fit flex-col gap-2">
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
        <Section title="about me">
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
