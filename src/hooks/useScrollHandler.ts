import { useEffect } from 'react';
import { useScrollStore } from '../stores/scrollStore';

export const useScrollHandler = () => {
  const { setIsScrolling, setShowTopBar } = useScrollStore();
  const isWide = window.innerWidth > 768;

  useEffect(() => {
    setIsScrolling(false);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle top bar visibility
      if (currentScrollY > (isWide ? 200 : 10)) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolling, setShowTopBar]);
};
