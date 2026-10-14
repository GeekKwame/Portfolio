import { memo } from 'react';

const ITEMS = ['Python', 'FastAPI', 'Django', 'AWS', 'Terraform', 'Docker', 'CI/CD', 'PostgreSQL', 'React', 'Linux'];

/** Endless ticker of the core stack. The list is rendered twice so the loop is seamless. */
const Marquee = memo(function Marquee() {
  const row = (hidden) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 sm:px-10 font-sans font-black uppercase tracking-[-0.03em] text-[clamp(2rem,1.2rem+3vw,4rem)] text-ink">
            {item}
          </span>
          <span aria-hidden="true" className="text-[clamp(1.25rem,1rem+1vw,2rem)] text-ink-faint">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Core stack" className="overflow-hidden border-y border-rule py-6 sm:py-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
});

export default Marquee;
