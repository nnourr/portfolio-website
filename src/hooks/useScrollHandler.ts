import { useEffect } from 'react';
import { useScrollStore } from '../stores/scrollStore';

export const useScrollHandler = () => {
  const { setIsScrolling, setShowTopBar } = useScrollStore();

  useEffect(() => {
    let previousScrollY = window.scrollY;

    // Start initial timer by showing bar
    setIsScrolling(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle top bar visibility
      if (currentScrollY > 10) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }

      // Determine scroll direction
      const scrollDirection = currentScrollY > previousScrollY ? 'down' : 'up';

      if (scrollDirection === 'up') {
        // User scrolled up - show bar (will auto-hide after 1s)
        setIsScrolling(false);
      } else if (scrollDirection === 'down') {
        // User scrolled down - immediately hide
        setIsScrolling(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolling, setShowTopBar]);
};
