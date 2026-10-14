import { useState } from 'react';

/** One row in the experience or education record: dates in the gutter, details beside. */
function RecordEntry({ title, organization, type, duration, location, isCurrent, description, highlights, skills, logo, logoText }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <li className="group grid gap-4 py-9 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 md:block">
        <p className="font-grotesque text-[1.375rem] font-bold leading-tight text-ink opacity-80 transition-opacity duration-500 group-hover:opacity-100">
          {duration}
        </p>
        <p className="text-sm text-ink-muted md:mt-1.5">{location}</p>
        {isCurrent && (
          <p className="inline-flex items-center gap-2 text-sm font-medium text-signal md:mt-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
            Current role
          </p>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-start gap-4">
          <div className="grayscale-hover hidden sm:flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-rule bg-white p-1.5">
            {logo && !logoFailed ? (
              <img src={logo} alt="" width="56" height="56" loading="lazy" className="h-full w-full object-contain" onError={() => setLogoFailed(true)} />
            ) : (
              <span aria-hidden="true" className="font-mono text-[0.6875rem] text-neutral-500">{logoText}</span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-[clamp(1.375rem,1.1rem+1vw,2rem)] font-bold text-ink opacity-85 transition-opacity duration-300 group-hover:opacity-100">
              {title}
            </h3>
            <p className="mt-1 font-grotesque text-[1.1875rem] font-semibold text-ink-muted">
              <span className="text-ink">{organization}</span>
              {type && <span> · {type}</span>}
            </p>
          </div>
        </div>

        {description && (
          <p className="mt-4 max-w-prose text-ink-soft leading-relaxed">{description}</p>
        )}

        {highlights?.length > 0 && (
          <ul className="mt-4 max-w-prose space-y-2 text-[0.9375rem] leading-relaxed text-ink-muted">
            {highlights.map((item) => (
              <li key={item} className="grid grid-cols-[1rem_minmax(0,1fr)]">
                <span aria-hidden="true" className="text-ink-faint">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {skills?.length > 0 && (
          <p className="stack mt-5">{skills.join(' · ')}</p>
        )}
      </div>
    </li>
  );
}

export default RecordEntry;
