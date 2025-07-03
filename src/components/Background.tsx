import { useEffect, useState } from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  className = '',
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset (background moves slower than scroll)
  const parallaxOffset = scrollY * 0.5; // Adjust this multiplier to change parallax intensity

  return (
    <div className={` ${className} bg-bg relative z-0 h-fit overflow-hidden`}>
      {/* Parallax background layer - Light mode */}
      <div
        className="bg-pale-accent/20 stroke-pale-accent/50 pointer-events-none fixed -top-[1400vh] left-0 -z-10 h-[1500vh] w-full mask-[url('/tic-tac.svg')] mask-size-[8vh] md:mask-size-[6vh] dark:hidden"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      {/* Parallax background layer - Dark mode */}
      <div
        className="bg-pale-accent/20 stroke-pale-accent/50 pointer-events-none fixed -top-[1400vh] left-0 -z-10 hidden h-[1500vh] w-full mask-[url('/circuit-board.svg')] mask-size-[50vh] transition-transform duration-75 ease-linear dark:block"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
