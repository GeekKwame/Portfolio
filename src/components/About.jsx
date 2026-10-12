import { memo } from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../config/constants';

const PRINCIPLES = [
  {
    title: 'Infrastructure is declared, not clicked',
    body: 'Production resources live in Terraform or AWS SAM, so every environment can be reviewed, reproduced, and rolled back — no manual drift.',
  },
  {
    title: 'No long-lived secrets in CI/CD',
    body: 'Deployments authenticate to AWS with short-lived STS tokens through OpenID Connect instead of stored access keys.',
  },
  {
    title: 'Isolation by default',
    body: 'Every query is scoped to its tenant, and sensitive comparisons run in constant time where it matters.',
  },
  {
    title: 'Tests gate the pipeline',
    body: 'Unit tests, integration tests, linting, and coverage run on every change before anything reaches production.',
  },
];

const GLANCE = [
  ['Based in', `${PERSONAL_INFO.location} (${PERSONAL_INFO.timezone})`],
  ['Currently', 'Software Engineer, Afarinick Company Limited'],
  ['Degree', 'BSc Applied Mathematics, KNUST'],
  ['Training', 'Azubi Africa — Cloud Computing & AI program (AWS)'],
  ['Open to', 'Full-time roles and freelance infrastructure work'],
  ['Full name', PERSONAL_INFO.fullName],
];

const About = memo(function About() {
  return (
    <Section
      id="about"
      number="03"
      label="About"
      title="From campus IT support to production cloud systems"
    >
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-16">
        <div className="space-y-5 max-w-prose text-[1.0625rem] leading-[1.7] text-ink-soft">
          <p>
            I studied Applied Mathematics at Kwame Nkrumah University of Science and Technology, and the habit
            stuck: I like systems I can reason about — clear data flow, explicit failure modes, and reliability
            I can measure.
          </p>
          <p>
            My first technical work was hands-on. I configured POS systems for retail and hospitality clients at
            Lerato Consult, then provided Tier-1 and Tier-2 support for more than 200 staff and students at KNUST,
            where I also wrote over 40 standard operating procedures. That is where I learned what actually breaks
            in production, and how much good documentation is worth.
          </p>
          <p>
            Alongside that I moved into backend engineering, building Django REST APIs at M365Connect, and then
            into the cloud: the Azubi Africa AWS program, Terraform and ECS Fargate at One Health Global
            Technologies, and leading an intern engineering team at AmaliTech.
          </p>
          <p>
            Today I am a Software Engineer at Afarinick Company Limited. The thread through all of it is that
            infrastructure is part of the product, not something bolted on after it.
          </p>
        </div>

        <aside aria-labelledby="glance-title" className="xl:border-l xl:border-rule xl:pl-8">
          <h3 id="glance-title" className="label">At a glance</h3>
          <dl className="mt-4 divide-y divide-rule border-y border-rule xl:border-t-0">
            {GLANCE.map(([term, value]) => (
              <div key={term} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 py-3 xl:block xl:first:pt-0">
                <dt className="text-sm text-ink-muted">{term}</dt>
                <dd className="text-[0.9375rem] text-ink xl:mt-0.5">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="mt-20 sm:mt-24">
        <h3 className="text-2xl text-ink border-b border-ink pb-4">How I work</h3>
        <ol className="grid sm:grid-cols-2 sm:gap-x-10">
          {PRINCIPLES.map((item, i) => (
            <li key={item.title} className="border-b border-rule py-6">
              <p className="font-mono text-meta text-accent-strong">{String(i + 1).padStart(2, '0')}</p>
              <h4 className="mt-2 text-[1.375rem] text-ink">{item.title}</h4>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted max-w-prose">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
});

export default About;
