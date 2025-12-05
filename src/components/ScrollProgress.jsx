import React, { useState, useEffect } from 'react'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

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

