/**
 * The path a request takes through a system, drawn as connected nodes.
 * Horizontal from `md` up, vertical on small screens so labels never truncate.
 */
function Connector() {
  return (
    <>
      <svg aria-hidden="true" className="md:hidden ml-6 my-1 text-ink-faint" width="8" height="14" viewBox="0 0 8 14">
        <path d="M4 0v12M1 9l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
      <svg aria-hidden="true" className="hidden md:block mx-1.5 text-ink-faint" width="22" height="8" viewBox="0 0 22 8">
        <path d="M0 4h20M17 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    </>
  );
}

function RequestPath({ steps, label = 'Request path' }) {
  return (
    <figure className="m-0">
      <figcaption className="label mb-3">{label}</figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center md:gap-y-3">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col md:flex-row md:items-center">
            {i > 0 && <Connector />}
            <span className="inline-flex self-start items-baseline gap-2 border border-rule-strong bg-paper-raised px-3 py-1.5 font-mono text-meta text-ink">
              <span className="text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default RequestPath;
