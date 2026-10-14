import { memo } from 'react';

const SIZE = 400;
const FRAMES = 3;

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A pencil loop that circles ~2.3 times with a drifting, wobbly radius. */
function scribblePath(seed) {
  const rand = seeded(seed);
  const turns = 2.2 + rand() * 0.3;
  const start = rand() * Math.PI * 2;
  const phases = [rand() * 6.28, rand() * 6.28, rand() * 6.28];
  const steps = 220;
  const c = SIZE / 2;
  const base = SIZE * 0.44;

  let d = '';
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const a = start + t * turns * Math.PI * 2;
    const wobble =
      0.018 * Math.sin(a * 2 + phases[0]) +
      0.01 * Math.sin(a * 3 + phases[1]) +
      0.005 * Math.sin(a * 7 + phases[2]);
    const r = base * (1 + wobble + 0.06 * (t - 0.5));
    const x = c + r * Math.cos(a);
    const y = c + r * 0.97 * Math.sin(a);
    d += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const PATHS = Array.from({ length: FRAMES }, (_, i) => scribblePath(7 + i * 31));

/** Circular portrait inside a hand-drawn ring that "boils" between frames like pencil animation. */
const ScribblePortrait = memo(function ScribblePortrait({ src, alt, className = '' }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="absolute inset-[11%] overflow-hidden rounded-full bg-paper-sunk">
        <img
          src={src}
          alt={alt}
          width="800"
          height="800"
          className="grayscale-hover h-full w-full object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
      </div>

      <svg
        aria-hidden="true"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="pointer-events-none absolute inset-0 h-full w-full text-ink-muted"
      >
        <defs>
          <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="3" result="grain" />
            <feDisplacementMap in="SourceGraphic" in2="grain" scale="3.5" />
          </filter>
        </defs>
        {PATHS.map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeOpacity="0.55"
            filter="url(#pencil)"
            className="scribble-frame"
            style={{ animationDelay: `${i * 130}ms`, opacity: i === 0 ? 1 : 0 }}
          />
        ))}
      </svg>
    </div>
  );
});

export default ScribblePortrait;
