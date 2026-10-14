import { memo } from 'react';
import profilePic from '../assets/images/profile/profile-pic.webp';
import { PERSONAL_INFO, RESUME } from '../config/constants';
import { FEATURED_PROJECTS, PROJECTS, projectAnchor } from '../data/projects';
import { trackResumeDownload } from '../utils/analytics';
import HeroSchematic from './HeroSchematic';
import SocialIcons from './SocialIcons';

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
                className="h-12 w-12 rounded-full object-cover border border-rule-strong"
                style={{ objectPosition: 'center 22%' }}
              />
              <p className="text-[0.9375rem] leading-snug text-ink-muted">
                {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
                <span className="block text-meta mt-0.5"><Availability /></span>
              </p>
            </div>

            <h1 className="mt-6 sm:mt-8 font-display font-normal text-ink text-[clamp(2.5rem,1rem+6.5vw,6.25rem)] leading-[1.02] tracking-[-0.01em]">
              <span className="block"><span className="text-reveal">Hi, I&apos;m</span></span>
              <span className="block"><span className="text-reveal [animation-delay:150ms]">{PERSONAL_INFO.name}.</span></span>
            </h1>
            <p className="text-rise mt-3 text-lg text-ink-muted">Nice to meet you.</p>

            <p className="mt-8 sm:mt-10 max-w-[38ch] font-semibold text-ink text-[clamp(1.125rem,0.95rem+0.8vw,1.5rem)] leading-[1.45]">
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

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <SocialIcons source="hero" />
              <a href={RESUME.path} target="_blank" rel="noopener noreferrer" onClick={() => trackResumeDownload()} className="link text-[0.9375rem] font-semibold"
                aria-label="Resume, PDF (opens in a new tab)">
                Resume (PDF) <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <a
            href={`#${projectAnchor(FEATURED_PROJECTS[0].slug)}`}
            className="group hidden lg:block lg:col-span-4 lg:self-center text-rise [animation-delay:300ms]"
          >
            <HeroSchematic className="max-w-[340px] ml-auto" />
            <p className="mt-4 ml-auto max-w-[340px] flex items-baseline justify-between gap-4 text-meta text-ink-muted group-hover:text-ink transition-colors">
              <span><span className="font-mono text-ink">Fig. 01</span> · {FEATURED_PROJECTS[0].shortTitle} architecture</span>
              <span aria-hidden="true">↓</span>
            </p>
          </a>
        </div>

        <nav aria-label="Selected work" className="mt-20 sm:mt-24 lg:mt-28">
          <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <p className="label">Selected work</p>
            <a href="#work" className="label inline-flex min-h-[32px] items-center hover:text-ink transition-colors">
              All {PROJECTS.length} projects <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ol className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, i) => (
              <li key={project.slug} className="border-b border-rule">
                <a
                  href={`#${projectAnchor(project.slug)}`}
                  className="group flex h-full flex-col py-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="font-mono text-meta text-accent-strong">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-2 font-sans font-extrabold tracking-[-0.02em] text-[1.375rem] leading-tight text-ink">
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
