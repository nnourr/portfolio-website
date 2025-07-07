import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showCTA?: boolean;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  className = '',
  showCTA = true,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let currentScrollY = 0;
    let ticking = false;
    let lastCallTime = 0;
    const throttleDelay = 16; // Throttle scroll detection

    // Smooth animation tick
    const tick = () => {
      setScrollY(currentScrollY);
      ticking = false;
    };

    // Throttled scroll handler - just captures scroll position
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCallTime >= throttleDelay) {
        currentScrollY = window.scrollY;
        lastCallTime = now;

        // Request animation frame for smooth rendering
        if (!ticking) {
          requestAnimationFrame(tick);
          ticking = true;
        }
      }
    };

    // Add scroll event listener
    if (window.innerWidth > 1024) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset (background moves slower than scroll)
  const parallaxOffset = scrollY * 0.2; // Adjust this multiplier to change parallax intensity

  return (
    <div
      className={` ${className} bg-bg after:bg-pale-accent/10 dark:after:bg-pale-accent/10 relative z-0 h-fit overflow-hidden pb-20 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:blur-xl md:after:hidden`}
    >
      <div
        className="bg-pale-accent/10 dark:bg-pale-accent/15 pointer-events-none fixed -top-[500vh] left-0 -z-10 h-[600vh] w-full mask-[url('/circuit-board.svg')] mask-size-[50vh] transition-transform duration-75 ease-linear"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div className="z-10">{children}</div>

      {showCTA && (
        <div className="text-contrast mt-16 flex flex-col items-center gap-2 py-8 text-center">
          <h3 className="font-sans text-xl font-bold md:text-2xl">
            Thanks for making it this far! 🚀
          </h3>
          <p>connect with me</p>
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="animate-bounce"
          />
        </div>
      )}
    </div>
  );
};

export default Background;
