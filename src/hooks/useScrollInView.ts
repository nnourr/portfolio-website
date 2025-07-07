import { useEffect, useRef, useState } from 'react';

interface UseScrollInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollInView = <T extends HTMLElement = HTMLElement>(
  options: UseScrollInViewOptions = {}
) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T>(null);

  const { threshold = 0.1, rootMargin = '-90px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  const shouldAnimate = triggerOnce
    ? (isInView && !hasAnimated) || hasAnimated
    : isInView;

  return { ref, isInView: shouldAnimate };
};
