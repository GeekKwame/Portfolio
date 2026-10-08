import { memo } from 'react';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import profilePic from '../assets/images/profile/profile-pic.jpeg';
import { PERSONAL_INFO, SOCIAL_LINKS, RESUME } from '../config/constants';
import { trackSocialClick, trackResumeDownload } from '../utils/analytics';

const CORE_STACK = [
  { label: 'Languages', value: 'Python · JavaScript' },
  { label: 'Backend', value: 'FastAPI · Django' },
  { label: 'Cloud', value: 'AWS · Terraform · Docker' },
  { label: 'Data', value: 'PostgreSQL · DynamoDB' },
  { label: 'Delivery', value: 'GitHub Actions · Linux' },
];

const Home = memo(function Home() {
  const githubLink = SOCIAL_LINKS.find((l) => l.platform === 'GitHub');

  return (
    <section
      name="home"
      className="relative w-full min-h-[88svh] lg:min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      <div className="section-inner w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Brand column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-5">
              <span className="text-accent font-medium">00 — Systems & Cloud Engineering</span>
              <span className="text-rule-strong" aria-hidden="true">/</span>
              <span>Accra, Ghana (GMT)</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-ink tracking-tight leading-[1.08] mb-5">
              {PERSONAL_INFO.name}
            </h1>

            <div className="border-l-2 border-accent pl-4 sm:pl-5 my-5 max-w-xl">
              <p className="font-display text-xl sm:text-2xl text-ink leading-snug tracking-tight">
                {PERSONAL_INFO.intro}
              </p>
            </div>

            <p className="font-sans text-[15px] sm:text-base text-ink-muted leading-relaxed max-w-prose mb-8">
              Currently software engineer at <span className="text-ink font-medium">Afarinick Company Limited</span>, building backend services and system architecture. Focused on correctness, zero-secret OIDC deployments, and infrastructure that stays maintainable in production.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="portfolio"
                smooth
                duration={500}
                offset={-80}
                className="group inline-flex items-center gap-3 px-5 py-3 bg-ink text-paper hover:bg-accent hover:text-paper transition-all duration-150 cursor-pointer min-h-[44px]"
              >
                <span className="font-mono text-xs uppercase tracking-wider">Explore selected systems</span>
                <span className="text-paper/70 group-hover:text-paper group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true">
                  →
                </span>
              </Link>

              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('github_hero')}
                  className="inline-flex items-center gap-2 px-4 py-3 border border-rule bg-paper-elevated text-ink hover:border-ink hover:text-accent font-mono text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <FaGithub size={13} className="text-ink-muted" />
                  <span>GitHub</span>
                  <span className="text-[10px] text-ink-faint" aria-hidden="true">↗</span>
                </a>
              )}

              <Link
                to="experience"
                smooth
                duration={500}
                offset={-80}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-wider cursor-pointer ml-1 py-2"
              >
                <span>Record</span>
                <span className="text-ink-faint" aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          {/* Meta rail */}
          <aside className="lg:col-span-5 lg:pt-2">
            <div className="border-t border-rule lg:border-t-0 lg:border-l lg:pl-10 pt-8 lg:pt-0">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-rule">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  ENGINEERING DOSSIER {'//'} EB-01
                </span>
                <span className="font-mono text-[10px] text-ink-faint">ACCRA / GMT</span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border border-rule shrink-0 bg-surface-muted">
                  <img
                    src={profilePic}
                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                <div className="pt-0.5">
                  <p className="font-sans text-sm font-semibold text-ink">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="meta-mono mt-1">
                    {PERSONAL_INFO.location} · Remote worldwide
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-2 px-2 py-0.5 border border-signal/30 bg-signal-soft/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-signal font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>

              <dl className="space-y-3 border-t border-rule pt-5">
                {CORE_STACK.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 items-baseline">
                    <dt className="meta-mono shrink-0">{row.label}</dt>
                    <dd className="font-mono text-xs text-ink text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 pt-5 border-t border-rule space-y-2">
                <li className="flex justify-between gap-4 meta-mono">
                  <span>YɛnCare clinic views</span>
                  <span className="text-ink font-medium">70+</span>
                </li>
                <li className="flex justify-between gap-4 meta-mono">
                  <span>Production services</span>
                  <span className="text-ink font-medium">8+</span>
                </li>
                <li className="flex justify-between gap-4 meta-mono">
                  <span>Cloud / IaC architectures</span>
                  <span className="text-ink font-medium">10+</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-rule">
                <a
                  href={RESUME.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackResumeDownload()}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 border border-rule bg-paper-elevated hover:border-ink hover:text-accent font-mono text-xs uppercase tracking-wider text-ink transition-colors"
                >
                  <span>Engineering Resume</span>
                  <span className="text-[11px] text-ink-faint">PDF ↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
});

export default Home;
