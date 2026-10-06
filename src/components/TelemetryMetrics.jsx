import { memo } from 'react';
import { TELEMETRY_METRICS } from '../config/constants';

const TelemetryMetrics = memo(function TelemetryMetrics() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14" aria-label="Engineering Impact Telemetry">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TELEMETRY_METRICS.map((metric) => (
          <div
            key={metric.id}
            className="tech-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                <span className="text-accent">{metric.value.slice(0, -1)}</span>
                <span className="text-white">{metric.value.slice(-1)}</span>
              </div>
              <h3 className="font-sans text-sm sm:text-base font-semibold text-slate-200 mb-1.5">
                {metric.label}
              </h3>
            </div>
            <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2 border-t border-border/60 pt-2.5">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default TelemetryMetrics;
