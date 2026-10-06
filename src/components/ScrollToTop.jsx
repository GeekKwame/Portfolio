import { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
    const id = window.requestAnimationFrame(() => toggleVisibility());

    return () => {
      window.cancelAnimationFrame(id);
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
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-surface/90 backdrop-blur-md text-slate-200 border border-border hover:border-accent/40 hover:text-accent p-3 rounded-lg shadow-xl active:scale-95 flex items-center justify-center touch-manipulation min-w-[44px] min-h-[44px] transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp className="text-sm sm:text-base" />
    </button>
  );
}

export default ScrollToTop;
