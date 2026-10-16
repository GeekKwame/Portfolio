import { lazy, memo, Suspense } from 'react';
import { PERSONAL_INFO } from '../config/constants';
import { FEATURED_PROJECTS, PROJECTS, projectAnchor } from '../data/projects';
import SocialIcons from './SocialIcons';

const HeroGlobe = lazy(() => import('./HeroGlobe'));

const Home = memo(function Home() {
  return (
    <section id="home" aria-label="Introduction" className="hero-plane relative overflow-hidden">
      <div className="shell relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14 lg:items-center">
          <div className="lg:col-span-6 xl:col-span-7 min-w-0">
            <p className="text-rise text-[0.9375rem] leading-snug text-ink-muted">
              {PERSONAL_INFO.title}
              <span className="text-ink-faint" aria-hidden="true"> · </span>
              {PERSONAL_INFO.location}
              <span className="mt-1.5 flex items-center gap-2 text-signal">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                Open to new roles
              </span>
            </p>

            <h1 className="mt-5 sm:mt-6 font-display font-normal text-ink text-[clamp(2.75rem,1.1rem+7vw,6rem)] leading-[1.02] tracking-[-0.01em]">
              <span className="block"><span className="text-reveal">Hi, I&apos;m</span></span>
              <span className="block"><span className="text-reveal [animation-delay:150ms]">{PERSONAL_INFO.name}.</span></span>
            </h1>

            <p className="text-rise mt-6 sm:mt-8 max-w-[36ch] text-[clamp(1.0625rem,0.95rem+0.55vw,1.3125rem)] leading-[1.5] text-ink-soft [animation-delay:120ms]">
              {PERSONAL_INFO.intro}
            </p>

            <div className="text-rise mt-8 sm:mt-10 flex flex-wrap gap-3 [animation-delay:200ms]">
              <a href="#work" className="btn-primary">
                See selected work <span aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>

            <div className="text-rise mt-8 [animation-delay:280ms]">
              <SocialIcons source="hero" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none lg:col-span-6 xl:col-span-5 text-rise [animation-delay:200ms]">
            <Suspense
              fallback={
                <div
                  className="aspect-square w-full rounded-full bg-paper-sunk/80"
                  aria-hidden="true"
                />
              }
            >
              <HeroGlobe />
            </Suspense>
          </div>
        </div>

        <nav aria-label="Selected work" className="mt-16 sm:mt-20 lg:mt-24">
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
