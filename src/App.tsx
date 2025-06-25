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
      <div className={`fixed top-0 left-0 w-full z-10`}>
        <div className={`transition-all duration-300 ease-out transform ${showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} w-[98%] bg-bg/30 m-auto h-fit flex items-center gap-2 inset-shadow-sm inset-shadow-white/20 backdrop-blur-xs rounded-xl px-4 py-2 my-4 shadow-xl text-contrast outline-1 outline-white/10`}>
          <h1 className="text-2xl font-black w-min text-nowrap underline decoration-accent">
            Noureldeen Ahmed
          </h1>
          <div className="bg-accent rounded-full h-6 w-full text-accent decoration-0" />
        </div>
      </div>
      <div className="w-[95%] m-auto h-fit inset-shadow-glow min-h-screen backdrop-blur-xs rounded-3xl px-4 py-3 my-4 flex flex-col gap-4 text-contrast">
        <h1 className="text-5xl font-black w-min" ref={titleRef}>
          <span className="underline decoration-accent">Noureldeen</span>
          <div className="flex gap-2 items-center">
            <h1 className="text-5xl w-fit underline decoration-accent">
              Ahmed
            </h1>
            <div className="bg-accent rounded-full h-8 w-full text-accent decoration-0">
              -
            </div>
          </div>
        </h1>
        <div className="after:inset-shadow-glow after:absolute after:top-0 after:left-0 after:w-full after:h-full overflow-hidden relative opacity-90 rounded-2xl">
          <img
            src="/headshotcropped.png"
            alt="me"
            className="w-full h-44 object-cover"
          />
        </div>
        <p className="text-xl font-bold">
          A Software Engineering graduate with 3 years of experience doing what
          I love.
        </p>
        <div className="flex flex-col group/button w-fit gap-2">
          <QuickButton
            className="hover:!opacity-100 group-hover/button:opacity-60"
            onClick={() => {
              window.open('/Noureldeen_Ahmed_Resume.pdf', '_blank');
            }}
          >
            view resume
          </QuickButton>
          <QuickButton className="hover:!opacity-100 group-hover/button:opacity-60">
            work experience
          </QuickButton>
          <QuickButton className="hover:!opacity-100 group-hover/button:opacity-60">
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
