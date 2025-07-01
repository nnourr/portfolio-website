import { useEffect } from 'react';
import { useScrollStore } from '../stores/scrollStore';

export const useScrollHandler = () => {
  const { setIsScrolling, setShowTopBar } = useScrollStore();

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
  }, [setIsScrolling, setShowTopBar]);
};
