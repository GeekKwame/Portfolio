import { memo } from 'react';
import { Link } from 'react-scroll';
import { PERSONAL_INFO } from '../config/constants';

const PRINCIPLES = [
  {
    title: 'Immutable infrastructure',
    body: 'Production resources declared in Terraform or AWS SAM — no manual drift in the environments that matter.',
  },
  {
    title: 'Zero-secret CI/CD',
    body: 'Deployments authenticate to AWS with short-lived STS tokens via OpenID Connect, not long-lived access keys.',
  },
  {
    title: 'Tenant isolation by default',
    body: 'Queries scoped by tenant identity; sensitive comparisons done in constant time where it counts.',
  },
  {
    title: 'Tests in the pipeline',
    body: 'Unit, integration, lint, and coverage gates run on every change before anything reaches production.',
  },
];

const CAPABILITY_GROUPS = [
  {
    category: 'Cloud Infrastructure',
    items: ['AWS ECS Fargate', 'Lambda', 'API Gateway', 'S3 + CloudFront OAC', 'VPC & ALB', 'AWS WAF', 'Terraform', 'AWS SAM'],
  },
  {
    category: 'Backend Engineering',
    items: ['Python', 'FastAPI', 'Django / DRF', 'Pydantic', 'SQLAlchemy 2.0', 'Boto3', 'REST API design', 'Auth & rate limiting'],
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'GitHub Actions', 'IAM & OIDC', 'CloudWatch', 'Multi-stage builds', 'Pytest', 'Ruff'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'DynamoDB', 'Redis', 'Schema design', 'Indexing', 'Prisma ORM'],
  },
  {
    category: 'Systems & Linux',
    items: ['Ubuntu / Linux', 'Bash', 'systemd', 'SSH', 'Networking basics', 'Active Directory'],
  },
  {
    category: 'Developer Tooling',
    items: ['Git', 'React', 'Vite', 'Tailwind CSS', 'Jest', 'ESLint'],
  },
];

const About = memo(function About() {
  return (
    <section name="about" className="section rule bg-paper-elevated">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
          <div className="lg:col-span-4">
            <p className="section-label mb-3">01 — About</p>
            <h2 className="section-title mb-4">Engineering identity</h2>
            <p className="section-lede">
              Applied mathematics, campus IT operations, then production software and cloud infrastructure.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 font-sans text-base sm:text-lg text-ink-muted leading-relaxed">
            <p>
              I am <span className="text-ink font-medium">{PERSONAL_INFO.fullName}</span>.
              I build reliable software services and the cloud infrastructure that keeps them secure, scalable, and automated.
            </p>
            <p>
              A BSc in Applied Mathematics from{' '}
              <span className="text-ink">Kwame Nkrumah University of Science and Technology (KNUST)</span>{' '}
              shaped how I think about systems — correctness, structured data flow, and measurable reliability.
              Years in campus IT support and retail POS operations taught me what breaks in the real world before I ever wrote a Terraform module.
            </p>
            <p>
              Today that path shows up as FastAPI and Django services, declarative AWS environments, and deployment pipelines
              that prefer short-lived credentials over hope. Infrastructure is not an afterthought; it is part of the product.
            </p>

            <div className="pt-4 border-t border-rule mt-8">
              <p className="meta-mono mb-2">Current focus</p>
              <p className="font-sans text-base text-ink">
                Software Engineer at Afarinick Company Limited — backend services, application architecture, and production features.
              </p>
              <Link
                to="experience"
                smooth
                duration={500}
                offset={-80}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink hover:text-accent transition-colors cursor-pointer mt-3"
              >
                <span>View career timeline</span>
                <span className="text-ink-faint">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20 lg:mb-28">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-8">
            <p className="section-label">Engineering convictions</p>
            <p className="font-mono text-xs text-ink-muted">Principles verified across production deployments</p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {PRINCIPLES.map((item, index) => (
              <div key={item.title} className="border-t border-rule pt-5">
                <span className="font-mono text-[11px] text-accent font-medium mb-2 block tracking-wider">
                  0{index + 1} / PRACTICE
                </span>
                <dt className="font-display text-xl sm:text-2xl text-ink mb-2 tracking-tight">
                  {item.title}
                </dt>
                <dd className="font-sans text-sm text-ink-muted leading-relaxed max-w-prose">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Skills */}
        <div id="skills" name="skills" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-3">02 — Capabilities</p>
              <h3 className="section-title">Tools grouped by how I use them</h3>
            </div>
            <p className="section-lede sm:text-right sm:max-w-xs">
              Competence over keyword walls — technologies from active production work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {CAPABILITY_GROUPS.map((group, groupIdx) => (
              <div key={group.category} className="border-t border-rule pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-sans text-sm font-semibold text-ink">
                    {group.category}
                  </h4>
                  <span className="font-mono text-[10px] text-ink-faint">
                    GRP-0{groupIdx + 1}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-xs text-ink-muted flex items-baseline gap-2">
                      <span className="text-accent text-[9px]" aria-hidden="true">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
