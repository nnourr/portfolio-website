import { useEffect } from 'react';
import { useScrollStore } from '../stores/scrollStore';

export const useScrollHandler = () => {
  const { setIsScrolling, setShowTopBar } = useScrollStore();

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let scrollStartY = window.scrollY;

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
        // User scrolled up - immediately set isScrolling to false
        setIsScrolling(false);
        scrollStartY = currentScrollY; // Reset start point for next down scroll
      } else if (scrollDirection === 'down') {
        // User scrolled down - check if we've moved 50px down from start point
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
