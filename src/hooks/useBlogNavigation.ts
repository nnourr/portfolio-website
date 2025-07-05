import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
}

export const useBlogNavigation = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(-1);
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

  // Get all h1 sections when component mounts or route changes
  useEffect(() => {
    const h1Elements = document.querySelectorAll('h1[id]');
    const newSections = Array.from(h1Elements).map(el => ({
      id: el.id,
      title: el.textContent || '',
    }));
    setSections(newSections);
  }, [location.pathname]);

  // Track scroll position to update current section and top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show top button after scrolling down 300px
      setShowTopButton(window.scrollY > 300);

      // Find current section based on scroll position
      const h1Elements = document.querySelectorAll('h1[id]');
      let currentIndex = -1;

      h1Elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          // Adjust threshold as needed
          currentIndex = index;
        }
      });

      setCurrentSectionIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index].id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    sections,
    currentSectionIndex,
    showTopButton,
    scrollToTop,
    scrollToSection,
    isLastSection: currentSectionIndex === sections.length - 1,
    isFirstSection: currentSectionIndex <= 0,
  };
};
