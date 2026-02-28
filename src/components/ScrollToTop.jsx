import React, { useState, useEffect, useCallback } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-cyan-500/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group touch-manipulation select-none min-w-[44px] min-h-[44px] ${isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp className='group-hover:-translate-y-1 transition-transform duration-300 text-sm sm:text-base' />
    </button>
  );
}

export default ScrollToTop
