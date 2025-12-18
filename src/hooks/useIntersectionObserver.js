import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Threshold for intersection (default: 0.1)
 * @param {string} options.rootMargin - Root margin for intersection (default: '0px')
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export const useIntersectionObserver = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after first intersection for performance
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [sectionRef, isVisible];
};

