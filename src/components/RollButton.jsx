/**
 * Pill link whose letters roll upward one after another on hover,
 * each replaced by an identical copy rising from below.
 */
function RollButton({ text, href, onClick, ariaLabel, icon = '↗', newTab = true }) {
  const letters = [...text];

  return (
    <a
      href={href}
      onClick={onClick}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel || text}
      className="group inline-flex min-h-[48px] items-center gap-4 rounded-full bg-ink px-6 font-syne text-[1.0625rem] font-medium text-paper
        transition-[padding,transform] duration-300 hover:px-8 hover:scale-[0.98]"
    >
      <span aria-hidden="true" className="inline-flex overflow-hidden leading-[1.4]">
        {letters.map((ch, i) => {
          const glyph = ch === ' ' ? '\u00A0' : ch;
          const delay = { transitionDelay: `${i * 50}ms` };
          return (
            <span key={i} className="relative inline-block">
              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full" style={delay}>
                {glyph}
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-500 ease-in-out group-hover:-translate-y-full" style={delay}>
                {glyph}
              </span>
            </span>
          );
        })}
      </span>
      <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {icon}
      </span>
    </a>
  );
}

export default RollButton;
