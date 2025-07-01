import { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import QuickButton from './components/QuickButton';
import Section from './components/Section';
import TopBar from './components/TopBar';
import Nav from './components/Nav';

function App() {
  const [showTopBar, setShowTopBar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollEndTimer: number;
    let isTouchDown = false;
    let isMouseDown = false;
    let scrollStartY = 0;
    let hasReachedThreshold = false;

    const pollForScrollEnd = () => {
      // Only set scrolling to false if user is not touching/pressing
      if (!isTouchDown && !isMouseDown) {
        setIsScrolling(false);
        hasReachedThreshold = false; // Reset threshold when scrolling ends
      } else {
        // Keep polling if user is still touching
        scrollEndTimer = setTimeout(pollForScrollEnd, 50);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }

      // Check if we've scrolled 200px from start position
      const currentScrollY = window.scrollY;
      const scrollDistance = Math.abs(currentScrollY - scrollStartY);

      if (!hasReachedThreshold && scrollDistance >= 50) {
        hasReachedThreshold = true;
      }

      // Only set scrolling to true if we've reached the threshold
      if (hasReachedThreshold) {
        setIsScrolling(true);

        // Clear existing timer
        clearTimeout(scrollEndTimer);

        // Start polling after 150ms of no scrolling
        scrollEndTimer = setTimeout(pollForScrollEnd, 50);
      }
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      scrollStartY = window.scrollY; // Capture start position
      clearTimeout(scrollEndTimer);
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleTouchStart = () => {
      isTouchDown = true;
      scrollStartY = window.scrollY; // Capture start position
      clearTimeout(scrollEndTimer);
    };

    const handleTouchEnd = () => {
      isTouchDown = false;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(scrollEndTimer);
    };
  }, []);

  return (
    <Background className={`font-courier pb-24`}>
      <Nav hide={isScrolling} />
      {/* top bar */}
      {/* main content */}
      <TopBar showTopBar={showTopBar} />
      <div className="text-contrast inset-shadow-glow mx-auto my-2 flex h-fit min-h-screen w-[95%] flex-col gap-4 rounded-xl px-4 pt-28 pb-4 backdrop-blur-xs">
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
