import { memo } from 'react';
import Section from './Section';
import { PROJECTS, projectAnchor } from '../data/projects';

/** `evidence` lists project slugs where the capability is demonstrated. */
const CAPABILITY_GROUPS = [
  {
    category: 'Cloud infrastructure',
    items: ['AWS ECS Fargate', 'Lambda', 'API Gateway', 'S3 + CloudFront (OAC)', 'VPC, ALB, Auto Scaling', 'AWS WAF', 'Terraform', 'AWS SAM'],
    evidence: ['file-service', 'event-connect', 'study-planner', 'pulsevote'],
  },
  {
    category: 'Backend engineering',
    items: ['Python', 'FastAPI', 'Django + DRF', 'Pydantic', 'SQLAlchemy 2.0', 'Boto3', 'REST API design', 'Auth and rate limiting'],
    evidence: ['file-service', 'yencare', 'kora'],
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'GitHub Actions', 'IAM and OIDC federation', 'CloudWatch', 'Linux, Bash, Nginx', 'Pytest and Jest'],
    evidence: ['terraformed', 'smart-task', 'pulsevote', 'serverless-api'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'DynamoDB', 'Redis', 'Schema design and indexing', 'Prisma ORM'],
    evidence: ['file-service', 'yencare', 'event-connect', 'smart-task'],
  },
];

const bySlug = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

const Skills = memo(function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      label="Skills"
      title="What I work with, and where it shows up"
      lede="Grouped by capability rather than listed as logos. Each group links to the projects that use it."
    >
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
        {CAPABILITY_GROUPS.map((group) => (
          <div key={group.category} className="flex flex-col border-t border-ink pt-4">
            <h3 className="text-[1.375rem] text-ink">{group.category}</h3>
            <ul className="mt-4 space-y-1.5 text-[0.9375rem] text-ink-soft">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-sm leading-8 text-ink-muted">
              <span className="label mr-2">Used in</span>
              {group.evidence.map((slug, i) => (
                <span key={slug}>
                  <a href={`#${projectAnchor(slug)}`} className="link !text-ink-muted hover:!text-accent-strong">
                    {bySlug[slug].shortTitle}
                  </a>
                  {i < group.evidence.length - 1 && <span aria-hidden="true">, </span>}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Skills;
