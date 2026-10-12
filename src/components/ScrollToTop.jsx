import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      data-menu-inert
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex h-11 w-11 items-center justify-center
        border border-ink bg-paper text-ink hover:bg-ink hover:text-paper-raised transition-[opacity,transform,background-color,color] duration-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp size={13} aria-hidden="true" />
    </a>
  );
}

export default ScrollToTop;
