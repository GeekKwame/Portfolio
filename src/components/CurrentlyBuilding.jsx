import { memo } from 'react';
import { Link } from 'react-scroll';
import { FaBuilding, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const CurrentlyBuilding = memo(function CurrentlyBuilding() {
  return (
    <div className="tech-card p-5 sm:p-6 bg-surface-card border-border relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse-slow" />
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
            Current Engineering Role
          </h4>
        </div>
        <Link
          to="experience"
          smooth
          duration={500}
          offset={-80}
          className="font-mono text-xs text-accent hover:text-white transition-colors cursor-pointer"
        >
          Timeline →
        </Link>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h5 className="font-display font-bold text-lg text-white">
              Software Engineer
            </h5>
            <span className="badge-mono text-[10px] text-accent border-accent/30 bg-accent/5">
              ACTIVE ROLE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <FaBuilding size={12} className="text-accent" />
              Afarinick Company Limited
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt size={12} className="text-slate-500" />
              Accra, Ghana · Full-time (On-site)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Developing and maintaining full-stack software applications and backend services. Collaborating on system architecture, database optimization, and scalable production features.
          </p>

          <div className="p-3 rounded bg-surface-muted border border-border/60">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-1">
              <FaCheckCircle className="text-emerald text-xs shrink-0" />
              <span className="font-semibold text-white">Primary Focus Areas</span>
            </div>
            <p className="text-xs text-slate-400">
              Python REST APIs, relational database performance, cloud integration, and resilient interface design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CurrentlyBuilding;
