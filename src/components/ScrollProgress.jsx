import React, { useState, useEffect, useCallback } from 'react'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollableHeight = documentHeight - windowHeight;
    const progress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100)) : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateScrollProgress]);

  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-50'>
      <div
        className='h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-150 ease-out shadow-lg shadow-cyan-500/50'
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgress

