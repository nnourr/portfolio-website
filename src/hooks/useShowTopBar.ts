import { useEffect } from 'react';
import { useTopBarStore } from '../stores/topBarStore';

export const useShowTopBar = () => {
  const { setShowTopBar } = useTopBarStore();
  const isWide = window.innerWidth > 768;

  useEffect(() => {
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
  }, [isWide, setShowTopBar]);
};
