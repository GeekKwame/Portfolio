import { memo } from 'react';

const EDGES = [
  'M160 54V136',
  'M160 180V214',
  'M160 266V290H75V316',
  'M160 290H245V316',
];

function Node({ x, y, w, h, title, meta, solid = false }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        className={solid ? 'fill-ink stroke-ink' : 'fill-paper-raised stroke-rule-strong'}
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - (meta ? 4 : -4)}
        textAnchor="middle"
        className={`font-sans text-[12px] font-semibold ${solid ? 'fill-paper' : 'fill-ink'}`}
      >
        {title}
      </text>
      {meta && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className={`font-mono text-[10px] ${solid ? 'fill-paper/70' : 'fill-ink-muted'}`}
        >
          {meta}
        </text>
      )}
    </g>
  );
}

/** Animated File Service API architecture for the hero's right column. */
const HeroSchematic = memo(function HeroSchematic({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 396" className={`w-full h-auto ${className}`}>
      <rect
        x="10"
        y="100"
        width="300"
        height="290"
        rx="10"
        fill="none"
        strokeDasharray="4 5"
        className="stroke-rule-strong"
      />
      <text x="24" y="122" className="font-sans text-[9px] font-bold uppercase tracking-[0.12em] fill-ink-muted">
        aws · vpc · 2 azs
      </text>
      <text x="296" y="122" textAnchor="end" className="font-mono text-[9px] fill-ink-faint">
        terraform · 12 modules
      </text>

      {EDGES.map((d) => (
        <g key={d} fill="none" strokeLinecap="round">
          <path d={d} strokeWidth="1" className="stroke-rule-strong" />
          <path d={d} strokeWidth="1.75" strokeDasharray="2 10" className="schematic-flow stroke-ink" />
        </g>
      ))}

      <Node x={80} y={10} w={160} h={44} title="client" meta="POST /files" />
      <Node x={80} y={136} w={160} h={44} title="Load balancer" meta="ALB · TLS" />
      <Node x={70} y={214} w={180} h={52} title="FastAPI" meta="ECS Fargate" solid />
      <Node x={20} y={316} w={110} h={44} title="PostgreSQL" meta="RDS · metadata" />
      <Node x={190} y={316} w={110} h={44} title="S3" meta="presigned I/O" />
    </svg>
  );
});

export default HeroSchematic;
