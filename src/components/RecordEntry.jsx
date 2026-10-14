import { useState } from 'react';

/** One row in the experience or education record: logo, organisation and role, dates on the right, details below. */
function RecordEntry({ title, organization, type, duration, location, isCurrent, description, highlights, skills, logo, logoText }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <li className="group py-9">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <div className="grayscale-hover flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-rule bg-white p-1.5">
          {logo && !logoFailed ? (
            <img src={logo} alt="" width="60" height="60" loading="lazy" className="h-full w-full object-contain" onError={() => setLogoFailed(true)} />
          ) : (
            <span aria-hidden="true" className="font-mono text-[0.6875rem] text-neutral-500">{logoText}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-syne text-[clamp(1.25rem,1rem+1vw,2rem)] font-bold text-ink [@media(hover:hover)]:opacity-85 transition-opacity duration-300 group-hover:opacity-100">
            {organization}
          </h3>
          <p className="mt-1 font-grotesque text-[clamp(1rem,0.9rem+0.4vw,1.25rem)] font-semibold text-ink-muted">
            {title}
            {type && <span> · {type}</span>}
          </p>
        </div>
        <div className="w-full sm:w-auto sm:text-right">
          <p className="font-grotesque text-[clamp(1.125rem,0.9rem+0.8vw,1.75rem)] font-bold leading-tight text-ink [@media(hover:hover)]:opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {duration}
          </p>
          <p className="text-sm text-ink-muted mt-1">{location}</p>
          {isCurrent && (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-signal mt-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
              Current role
            </p>
          )}
        </div>
      </div>

      <div className="min-w-0 sm:pl-[calc(60px+2rem)]">

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
