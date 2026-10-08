import { useState, useEffect, useCallback } from 'react';

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
      behavior: 'smooth',
    });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 border border-rule bg-paper-elevated text-ink hover:border-ink hover:text-accent p-3 flex items-center justify-center touch-manipulation min-w-[40px] min-h-[40px] transition-all duration-200 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <span className="font-mono text-xs leading-none">↑</span>
    </button>
  );
}

export default ScrollToTop;
