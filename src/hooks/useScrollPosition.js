import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll position with throttling
 * @param {number} throttleMs - Throttle delay in milliseconds (default: 100)
 * @returns {number} scrollY - Current scroll position
 */
export const useScrollPosition = (throttleMs = 100) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollTime = 0;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentTime = Date.now();
      
      if (currentTime - lastScrollTime >= throttleMs) {
        setScrollY(window.pageYOffset || document.documentElement.scrollTop);
        lastScrollTime = currentTime;
        ticking = false;
      } else if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const timeSinceLastUpdate = Date.now() - lastScrollTime;
          if (timeSinceLastUpdate >= throttleMs) {
            setScrollY(window.pageYOffset || document.documentElement.scrollTop);
            lastScrollTime = Date.now();
            ticking = false;
          }
        });
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    updateScrollPosition(); // Initial value

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [throttleMs]);

  return scrollY;
};

