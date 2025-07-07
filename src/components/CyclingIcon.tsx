import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useState, useEffect } from 'react';

type IconType = IconDefinition | string;

interface CyclingIconProps {
  icons: IconType[];
  intervalMs?: number;
  className?: string;
  animationType?: 'fade' | 'scale' | 'rotate' | 'none';
}

export const CyclingIcon = ({
  icons,
  intervalMs = 1000,
  className = '',
  animationType = 'scale',
}: CyclingIconProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (icons.length <= 1) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      // Change icon after animation starts
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % icons.length);
        setIsAnimating(false);
      }, 150); // Half of the transition duration
    }, intervalMs);

    return () => clearInterval(interval);
  }, [icons.length, intervalMs]);

  const getAnimationClasses = () => {
    if (animationType === 'none') return '';

    const baseClasses = 'transition-all duration-300 ease-in-out';

    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${isAnimating ? 'opacity-0' : 'opacity-100'}`;
      case 'scale':
        return `${baseClasses} ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`;
      case 'rotate':
        return `${baseClasses} ${isAnimating ? 'rotate-180 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'}`;
      default:
        return baseClasses;
    }
  };

  const currentIcon = icons[currentIndex];

  // Check if current icon is a string (SVG path) or IconDefinition
  const isSvgPath = typeof currentIcon === 'string';

  return isSvgPath ? (
    <img
      src={currentIcon}
      alt="icon"
      className={`${className} ${getAnimationClasses()}`}
    />
  ) : (
    <FontAwesomeIcon
      icon={currentIcon as IconDefinition}
      className={`${className} ${getAnimationClasses()}`}
    />
  );
};
