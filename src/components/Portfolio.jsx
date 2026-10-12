import { memo } from 'react';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import Figure from './Figure';
import RequestPath from './RequestPath';
import { PROJECTS, FEATURED_PROJECTS, OTHER_PROJECTS, projectAnchor } from '../data/projects';
import { trackProjectView, trackSocialClick } from '../utils/analytics';

const pad = (n) => String(n).padStart(2, '0');

function ProjectLinks({ project, compact = false }) {
  const { live, source } = project.links;
  const track = (kind) => () => {
    trackProjectView(project.title);
    trackSocialClick(kind);
  };

  if (compact) {
    return (
      <p className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" onClick={track('live_demo')} className="link"
            aria-label={`${project.shortTitle} live site (opens in a new tab)`}>
            Live site <span aria-hidden="true">↗</span>
          </a>
        )}
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer" onClick={track('github_repo')} className="link"
            aria-label={`${project.shortTitle} source on GitHub (opens in a new tab)`}>
            Source on GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" onClick={track('live_demo')} className="btn-primary !min-h-[42px] !px-4"
          aria-label={`${project.shortTitle} live site (opens in a new tab)`}>
          Live site <span aria-hidden="true">↗</span>
        </a>
      )}
      {source && (
        <a href={source} target="_blank" rel="noopener noreferrer" onClick={track('github_repo')} className="btn-secondary !min-h-[42px] !px-4"
          aria-label={`${project.shortTitle} source on GitHub (opens in a new tab)`}>
          <FaGithub size={15} aria-hidden="true" /> Source
        </a>
      )}
    </div>
  );
}

function CaseStudy({ project, number }) {
  const rows = [
    ['Problem', project.problem],
    ['Approach', project.approach],
    ['Key decision', project.decision],
  ].filter(([, text]) => text);

  return (
    <article id={projectAnchor(project.slug)} aria-labelledby={`${projectAnchor(project.slug)}-title`} className="scroll-mt-6 border-t border-ink pt-6 sm:pt-8">
      <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <div className="min-w-0 max-w-2xl">
          <p className="label">
            <span className="text-accent-strong">{pad(number)}</span>
            <span aria-hidden="true" className="mx-2 text-ink-faint">/</span>
            {project.category}
          </p>
          <h3 id={`${projectAnchor(project.slug)}-title`} className="mt-2 text-ink text-[clamp(1.625rem,1.15rem+1.5vw,2.25rem)]">
            {project.title}
          </h3>
        </div>
        <ProjectLinks project={project} />
      </header>

      <div className="mt-8">
        <Figure image={project.image} number={pad(number)} />
      </div>

      <dl className="mt-10 divide-y divide-rule border-y border-rule">
        {rows.map(([term, text]) => (
          <div key={term} className="grid gap-2 py-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
            <dt className="text-[0.9375rem] font-semibold text-ink">{term}</dt>
            <dd className="text-ink-soft leading-relaxed max-w-prose">{text}</dd>
          </div>
        ))}
        <div className="grid gap-2 py-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
          <dt className="text-[0.9375rem] font-semibold text-ink">Stack</dt>
          <dd className="stack !text-ink-soft">{project.stack.join(' · ')}</dd>
        </div>
      </dl>

      <div className="mt-8">
        <RequestPath steps={project.flow} />
      </div>
    </article>
  );
}

function CompactProject({ project, number }) {
  return (
    <article id={projectAnchor(project.slug)} aria-labelledby={`${projectAnchor(project.slug)}-title`} className="scroll-mt-6 grid gap-6 py-10 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10">
      <div className="max-w-sm md:max-w-none">
        <Figure image={project.image} number={pad(number)} compact />
      </div>
      <div className="min-w-0">
        <p className="label">
          <span className="text-accent-strong">{pad(number)}</span>
          <span aria-hidden="true" className="mx-2 text-ink-faint">/</span>
          {project.category}
        </p>
        <h3 id={`${projectAnchor(project.slug)}-title`} className="mt-2 text-2xl text-ink">{project.title}</h3>
        <p className="mt-3 text-ink-soft leading-relaxed max-w-prose">{project.problem}</p>
        <p className="mt-3 text-[0.9375rem] text-ink-muted leading-relaxed max-w-prose">{project.approach}</p>
        <p className="stack mt-4">{project.stack.join(' · ')}</p>
        <div className="mt-5">
          <ProjectLinks project={project} compact />
        </div>
      </div>
    </article>
  );
}

function ProjectIndex() {
  return (
    <nav aria-label="Projects in this section">
      <p className="label mb-4">Index</p>
      <ol className="space-y-0.5 border-l border-rule pl-4">
        {PROJECTS.map((project, i) => (
          <li key={project.slug}>
            <a href={`#${projectAnchor(project.slug)}`} className="group flex items-baseline gap-3 py-1.5 text-sm text-ink-muted hover:text-ink transition-colors">
              <span className="font-mono text-meta pt-px group-hover:text-accent-strong">{pad(i + 1)}</span>
              <span>{project.shortTitle}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const Portfolio = memo(function Portfolio() {
  return (
    <Section
      id="work"
      number="01"
      label="Work"
      title="Systems I’ve designed, built, and shipped"
      lede="Four case studies in depth, then five smaller cloud and serverless builds. Diagrams open at full size."
      aside={<ProjectIndex />}
    >
      <div className="space-y-20 sm:space-y-24">
        {FEATURED_PROJECTS.map((project, i) => (
          <CaseStudy key={project.slug} project={project} number={i + 1} />
        ))}
      </div>

      <div className="mt-24 sm:mt-32">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-4">
          <h3 className="text-2xl text-ink">More builds</h3>
          <p className="label">{OTHER_PROJECTS.length} projects</p>
        </div>
        <div className="divide-y divide-rule">
          {OTHER_PROJECTS.map((project, i) => (
            <CompactProject key={project.slug} project={project} number={FEATURED_PROJECTS.length + i + 1} />
          ))}
        </div>
      </div>
    </Section>
  );
});

export default Portfolio;
