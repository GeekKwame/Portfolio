import { useEffect, useRef } from 'react';

/** Small dot that trails the pointer and inverts whatever it passes over. Mouse/trackpad only. */
function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || !window.matchMedia('(pointer: fine)').matches) return undefined;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
        dot.style.opacity = '1';
      });
    };
    const onLeave = () => { dot.style.opacity = '0'; };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[2147483647] h-2 w-2 rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-200"
    />
  );
}

export default CursorDot;
