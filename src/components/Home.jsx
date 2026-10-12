import { memo } from 'react';
import profilePic from '../assets/images/profile/profile-pic.webp';
import { PERSONAL_INFO, SOCIAL_LINKS, RESUME } from '../config/constants';
import { FEATURED_PROJECTS, PROJECTS, projectAnchor } from '../data/projects';
import { trackSocialClick, trackResumeDownload } from '../utils/analytics';

const github = SOCIAL_LINKS.find((l) => l.platform === 'GitHub');
const linkedin = SOCIAL_LINKS.find((l) => l.platform === 'LinkedIn');

function Availability() {
  return (
    <span className="inline-flex items-center gap-2 text-signal">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
      Open to new roles
    </span>
  );
}

const Home = memo(function Home() {
  return (
    <section id="home" aria-label="Introduction" className="pt-28 sm:pt-32 lg:pt-40">
      <div className="shell">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <img
                src={profilePic}
                alt=""
                width="48"
                height="48"
                className="lg:hidden h-12 w-12 object-cover border border-rule-strong"
                style={{ objectPosition: 'center 22%' }}
              />
              <p className="text-[0.9375rem] leading-snug text-ink-muted">
                {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
                <span className="block lg:hidden text-meta mt-0.5"><Availability /></span>
              </p>
            </div>

            <h1 className="mt-6 sm:mt-8 text-ink text-[clamp(2.75rem,1.5rem+5.4vw,6rem)] leading-[0.98] tracking-[-0.03em]">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-7 sm:mt-9 max-w-[34ch] font-display text-ink text-[clamp(1.375rem,1.1rem+1vw,1.875rem)] leading-[1.32] tracking-[-0.01em]">
              {PERSONAL_INFO.intro}
            </p>

            <p className="mt-6 max-w-prose text-ink-muted">
              Software Engineer at Afarinick Company Limited, working on backend services and application
              architecture. Previously cloud and DevOps engineering at One Health Global Technologies, and
              engineering team lead at AmaliTech.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                See selected work <span aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>

            <p className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              <a href={RESUME.path} target="_blank" rel="noopener noreferrer" onClick={() => trackResumeDownload()} className="link"
                aria-label="Resume, PDF (opens in a new tab)">
                Resume (PDF) <span aria-hidden="true">↗</span>
              </a>
              <a href={github.url} target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('github_hero')} className="link"
                aria-label="GitHub profile (opens in a new tab)">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={linkedin.url} target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('linkedin_hero')} className="link"
                aria-label="LinkedIn profile (opens in a new tab)">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>

          <figure className="hidden lg:block lg:col-span-4 m-0">
            <img
              src={profilePic}
              alt={`Portrait of ${PERSONAL_INFO.name}`}
              width="800"
              height="800"
              className="block w-full aspect-[4/5] object-cover border border-rule-strong bg-paper-sunk"
              style={{ objectPosition: 'center 22%' }}
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-meta text-ink-muted">
              <span>{PERSONAL_INFO.location} · {PERSONAL_INFO.timezone}</span>
              <Availability />
            </figcaption>
          </figure>
        </div>

        <nav aria-label="Selected work" className="mt-20 sm:mt-24 lg:mt-28">
          <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <p className="label">Selected work</p>
            <a href="#work" className="label inline-flex min-h-[32px] items-center hover:text-ink transition-colors">
              All {PROJECTS.length} projects <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ol className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, i) => (
              <li key={project.slug} className="border-b border-rule">
                <a
                  href={`#${projectAnchor(project.slug)}`}
                  className="group flex h-full flex-col py-6"
                >
                  <span className="font-mono text-meta text-accent-strong">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-2 font-display text-[1.375rem] leading-tight text-ink group-hover:text-accent-strong transition-colors">
                    {project.shortTitle}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-ink-muted">{project.summary}</span>
                  <span className="stack mt-auto pt-4">{project.stack.slice(0, 3).join(' · ')}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
});

export default Home;
