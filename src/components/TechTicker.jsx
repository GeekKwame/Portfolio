import { memo } from 'react';
import { TECH_TICKER } from '../config/constants';

const TechTicker = memo(function TechTicker() {
  const tickerItems = [...TECH_TICKER, ...TECH_TICKER];

  return (
    <div 
      className="w-full overflow-hidden border-y border-border bg-surface-muted/60 backdrop-blur-sm select-none py-3" 
      aria-label="Core Engineering Technologies"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {tickerItems.map((tech, idx) => (
          <div key={`${tech}-${idx}`} className="flex items-center gap-4 mx-4 shrink-0">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-slate-300">
              {tech}
            </span>
            <span className="text-accent text-[10px] select-none" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TechTicker;
