import { useState, useEffect } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const useIconCycle = (
  icons: IconDefinition[],
  intervalMs: number = 1000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (icons.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % icons.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [icons.length, intervalMs]);

  return icons[currentIndex];
};
