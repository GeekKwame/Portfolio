import { memo } from 'react';
import { RESUME } from '../config/constants';
import { trackResumeDownload } from '../utils/analytics';

/** Full-width resume call to action with a looping sheen across the text. */
const ResumeBanner = memo(function ResumeBanner() {
  return (
    <section aria-label="Resume" className="border-t border-rule">
      <div className="shell py-24 sm:py-32 text-center">
        <p className="label">Everything on one page</p>
        <a
          href={RESUME.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackResumeDownload()}
          aria-label="My resume, PDF (opens in a new tab)"
          className="group mt-4 inline-flex items-baseline gap-4 transition-transform duration-300 hover:scale-[0.98]"
        >
          <span className="text-shine font-display text-[clamp(3rem,1.5rem+7vw,8rem)] leading-none">
            My Resume
          </span>
          <span
            aria-hidden="true"
            className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
      </div>
    </section>
  );
});

export default ResumeBanner;
