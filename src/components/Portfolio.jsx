import { useState, memo } from 'react';
import { FaGithub, FaLock } from 'react-icons/fa';
import { trackProjectView, trackSocialClick } from '../utils/analytics';
import yencareImage from "../assets/images/portfolio/yencare_platform.png";
import eventConnectImage from "../assets/images/portfolio/event-connect.webp";
import smartTaskImage from "../assets/images/portfolio/smart-task.webp";
import pulsevoteImage from "../assets/images/portfolio/pulsevote.jpg";
import terraformedImage from "../assets/images/portfolio/terraformed-webpage.png";
import student from "../assets/images/portfolio/student-study-planner.jpeg";
import serverlessImage from "../assets/images/portfolio/serverless-terraform-aws.webp";
import fileServiceImage from "../assets/images/portfolio/file-server.webp";
import { FLAGSHIP } from '../config/constants';

const PROJECTS = [
  {
    id: 8,
    src: yencareImage,
    title: "YɛnCare — Outpatient Clinic & Virtual Queue",
    category: "Full-Stack",
    featured: true,
    problem: "Campus clinics needed self-service booking and live waiting-room updates without password friction — across 70+ responsive views for triage, appointments, and dispatch.",
    architecture: "Express REST backend with tiered IP/reference rate limiting on public check-ins, atomic queue transitions via Prisma + PostgreSQL, and role-based JWT for clinical workstations. 270+ Jest/Supertest specs on GitHub Actions.",
    decisions: "Reference-code check-in with brute-force protection (HTTP 429) instead of accounts for patients; workstation actions isolated behind roles.",
    flow: ['Patient Web UI', 'Express REST + Rate Limiting', 'Prisma + PostgreSQL', 'Queue Dispatch'],
    link: "https://yencare-platform.vercel.app/",
    link2: "https://github.com/GeekKwame/yencare-platform/",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "JWT", "Jest", "GitHub Actions"],
  },

  {
    id: 0,
    src: fileServiceImage,
    title: "Multi-Tenant File Service API",
    category: "Backend / API",
    featured: true,
    problem: "Clients need to upload and retrieve files without the API ever streaming bytes — while keeping tenants strictly isolated.",
    architecture: "ALB across two AZs fronts FastAPI on ECS Fargate in private subnets. Metadata in RDS PostgreSQL 16 (SQLAlchemy 2.0); binaries in S3 as {app_id}/{uuid}-{filename}. Presigned PUT/GET; SHA-256 API keys compared in constant time. Terraform across 12 modules and 3 environments.",
    decisions: "UUIDv4 addressing; every query scoped by app_id; cross-tenant reads return 404 so existence cannot be confirmed.",
    flow: ['Client', 'ALB + FastAPI / ECS', 'RDS PostgreSQL', 'S3 Presigned I/O'],
    link2: "https://github.com/GeekKwame/file-service-server",
    tags: ["FastAPI", "ECS Fargate", "RDS", "S3", "Terraform", "Docker", "GitHub Actions"],
  },
  {
    id: 3,
    src: eventConnectImage,
    title: "Event-Connect — Serverless Registration",
    category: "Serverless",
    featured: true,
    problem: "Browse events, register, and receive an on-screen ticket — with admin list/cancel and email recovery from DynamoDB.",
    architecture: "CloudFront as the only public HTTPS endpoint. Private S3 with OAC for the UI; API Gateway behind WAF default-deny. Five Python 3.12 Lambdas, DynamoDB tickets, SES confirmation, SNS admin notifications.",
    decisions: "Ticket validity lives in DynamoDB; browser localStorage is convenience only. WAF default-deny on the API origin.",
    flow: ['Browser', 'CloudFront + S3 OAC', 'WAF + API Gateway', 'Lambda + DynamoDB'],
    link2: FLAGSHIP.repo,
    tags: ["AWS SAM", "CloudFront", "Lambda", "DynamoDB", "WAF", "SES", "Python"],
  },
  {
    id: 1,
    src: smartTaskImage,
    title: "Smart Task Notification System",
    category: "Serverless",
    problem: "A single write should fan out asynchronously to DynamoDB, SNS, SQS, and EventBridge without blocking the client.",
    architecture: "API Gateway → ingestion Lambda → DynamoDB; SNS/SQS failures logged without failing the request. CloudWatch metrics, Lambda-error alarm, CloudTrail audit. Full stack in AWS SAM; pytest + moto in CI.",
    decisions: "Decouple acknowledgment from downstream delivery so notification failures never poison the write path.",
    flow: ['API Gateway', 'Ingestion Lambda', 'DynamoDB', 'SNS + SQS + EventBridge'],
    link2: "https://github.com/GeekKwame/SmartTaskNotificationSystem",
    tags: ["AWS SAM", "Lambda", "DynamoDB", "SNS", "SQS", "EventBridge", "Pytest"],
  },
  {
    id: 2,
    src: student,
    title: "Student Study Planner — AWS Capstone",
    category: "Cloud / IaC",
    problem: "Host an interactive study planner on highly available AWS with automated SSL and CI/CD.",
    architecture: "Route 53 → CloudFront → ALB → EC2 Auto Scaling (Nginx) with S3 assets behind OAC. ALB limited to CloudFront Managed Prefix List; EC2 only accepts ALB traffic. CloudWatch CPU/5xx alarms and Budget alerts.",
    decisions: "Private app tier; CDN as the only public edge; Auto Scaling for resilience.",
    flow: ['Route 53', 'CloudFront', 'ALB', 'ASG EC2 + S3 OAC'],
    link2: "https://github.com/GeekKwame/student-student-planner",
    tags: ["CloudFront", "ALB", "Auto Scaling", "EC2", "S3", "ACM", "GitHub Actions"],
  },
  {
    id: 4,
    src: pulsevoteImage,
    title: "PulseVote — Live Polling",
    category: "Cloud / IaC",
    problem: "Real-time polling with high-availability routing, automated SSL, and zero-downtime deploys.",
    architecture: "CloudFront, ALB, EC2, S3, ACM. Deploys via GitHub Actions, SCP, and SSH. Ingress locked to CloudFront prefix list; CloudWatch on CPU and ALB 5xx.",
    decisions: "Same hardened edge pattern as the study planner — CDN-first, private compute.",
    flow: ['Internet', 'CloudFront + ACM', 'ALB', 'EC2 + CloudWatch'],
    link2: "https://github.com/GeekKwame/pulsevote",
    tags: ["CloudFront", "ALB", "EC2", "S3", "ACM", "Nginx", "CloudWatch"],
  },
  {
    id: 5,
    src: terraformedImage,
    title: "Terraformed — Secure Static Site + OIDC",
    category: "Cloud / IaC",
    problem: "Deploy a static site with zero long-lived AWS keys in repository secrets.",
    architecture: "S3 + CloudFront OAC. GitHub Actions requests short-lived STS via IAM OIDC. Remote Terraform state in encrypted S3 with DynamoDB locking.",
    decisions: "OIDC federation replaces static access keys entirely.",
    flow: ['GitHub Actions', 'STS OIDC', 'Terraform Apply', 'S3 + DynamoDB Lock'],
    link2: "https://github.com/GeekKwame/terraformed-project",
    tags: ["Terraform", "S3", "CloudFront", "OIDC", "GitHub Actions", "DynamoDB"],
  },
  {
    id: 6,
    src: serverlessImage,
    title: "Serverless API — Terraform + Lambda",
    category: "Serverless",
    problem: "Provision an API Gateway → Python Lambda → S3 pipeline entirely in Terraform.",
    architecture: "Least-privilege IAM scoped to S3 actions and API Gateway source ARNs. Lambda packages via archive_file and source_code_hash. Remote state with S3 versioning and DynamoDB lock.",
    decisions: "Idempotent deploys tracked by source hash; IAM scoped to the call path, not wildcards.",
    flow: ['Terraform', 'API Gateway', 'Scoped IAM', 'Lambda → S3'],
    link2: "https://github.com/GeekKwame/terraform-aws-serverless-api",
    tags: ["Terraform", "Lambda", "API Gateway", "S3", "IAM", "Python"],
  },
];

const CATEGORIES = ['All', 'Cloud / IaC', 'Backend / API', 'Serverless', 'Full-Stack'];

function ArchitectureFlow({ flow }) {
  return (
    <div className="bg-paper-elevated border border-rule p-3 mt-3">
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-rule">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          DATA PIPELINE {'//'} FLOW
        </span>
        <span className="font-mono text-[10px] text-ink-faint">END-TO-END</span>
      </div>
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
        {flow.map((node, i) => (
          <li key={node} className="inline-flex items-center gap-1.5">
            <span className="text-ink font-medium border border-rule px-2 py-0.5 bg-paper">
              {node}
            </span>
            {i < flow.length - 1 && (
              <span className="text-accent font-bold px-0.5" aria-hidden="true">→</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackProjectView(project.title);
            trackSocialClick('live_demo');
          }}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-ink text-paper hover:bg-accent text-xs font-mono uppercase tracking-wider transition-colors min-h-[38px]"
        >
          <span>Live Endpoint</span>
          <span className="text-[10px] text-paper/70">↗</span>
        </a>
      )}
      {project.link2 && (
        <a
          href={project.link2}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackProjectView(project.title);
            trackSocialClick('github_repo');
          }}
          className="inline-flex items-center gap-2 px-3.5 py-2 border border-rule bg-paper-elevated text-ink hover:border-ink hover:text-accent text-xs font-mono uppercase tracking-wider transition-colors min-h-[38px]"
        >
          <FaGithub size={12} className="text-ink-muted" />
          <span>Source & IaC</span>
          <span className="text-[10px] text-ink-faint">↗</span>
        </a>
      )}
      {project.isPrivate && (
        <span className="font-mono text-[11px] text-ink-muted inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-rule bg-paper">
          <FaLock size={9} className="text-ink-faint" />
          <span>Private Production Repo</span>
        </span>
      )}
    </div>
  );
}

function StackLine({ tags }) {
  return (
    <div className="pt-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-1">
        TECH STACK
      </span>
      <p className="font-mono text-xs text-ink-muted leading-relaxed">
        {tags.join(' · ')}
      </p>
    </div>
  );
}

const Portfolio = memo(function Portfolio() {
  const [imageErrors, setImageErrors] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const visibleRest = rest.filter((p) => activeFilter === 'All' || p.category === activeFilter);
  const visibleFeatured = featured.filter((p) => activeFilter === 'All' || p.category === activeFilter);

  return (
    <section name="portfolio" className="section rule">
      <div className="section-inner">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="section-label mb-3">03 — Work</p>
            <h2 className="section-title mb-3">Selected systems</h2>
            <p className="section-lede">
              Case studies in APIs, cloud architecture, and infrastructure as code — documented as production systems.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2 border-b border-rule pb-2"
            role="group"
            aria-label="Filter work by category"
          >
            {CATEGORIES.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition-colors border ${
                  activeFilter === filter
                    ? 'border-ink bg-ink text-paper font-medium'
                    : 'border-rule bg-paper-elevated text-ink-muted hover:border-ink hover:text-ink'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured case studies */}
        <div className="space-y-16 lg:space-y-24 mb-16 lg:mb-24">
          {visibleFeatured.map((project, index) => {
            const hasMedia = project.src && !imageErrors[project.id];
            const imageLeft = index % 2 === 0;

            const media = hasMedia ? (
              <div className="border border-rule bg-surface-muted overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 bg-paper-elevated border-b border-rule">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full border border-rule bg-paper" />
                    <span className="w-2 h-2 rounded-full border border-rule bg-paper" />
                    <span className="w-2 h-2 rounded-full border border-rule bg-paper" />
                  </div>
                  <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
                    SYS-0{index + 1} {'//'} VIEWPORT
                  </span>
                </div>
                <div className="p-2 sm:p-4 bg-paper-elevated/40">
                  <img
                    src={project.src}
                    alt={`${project.title} interface`}
                    className="w-full h-auto max-h-[340px] object-contain mx-auto"
                    onError={() => setImageErrors((prev) => ({ ...prev, [project.id]: true }))}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ) : (
              <div className="border border-rule bg-surface-muted p-6 min-h-[220px] flex items-center">
                <ArchitectureFlow flow={project.flow} />
              </div>
            );

            const content = (
              <div className="space-y-5">
                <div className="border-b border-rule pb-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-accent tracking-wider">
                      SYS-0{index + 1}
                    </span>
                    <span className="text-rule-strong" aria-hidden="true">/</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-rule-strong pl-3.5 py-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-1">
                      Problem & Operational Context
                    </p>
                    <p className="font-sans text-sm text-ink leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-3.5 py-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent font-medium mb-1">
                      Architecture & Infrastructure
                    </p>
                    <p className="font-sans text-sm text-ink-muted leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  <div className="border-l-2 border-rule-strong pl-3.5 py-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-1">
                      Key Engineering Decision
                    </p>
                    <p className="font-sans text-sm text-ink-muted leading-relaxed">
                      {project.decisions}
                    </p>
                  </div>
                </div>

                {project.flow && (
                  <ArchitectureFlow flow={project.flow} />
                )}

                <StackLine tags={project.tags} />
                <ProjectLinks project={project} />
              </div>
            );

            return (
              <article key={project.id} className="border-t border-rule pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {imageLeft ? (
                    <>
                      <div className="lg:col-span-5">{media}</div>
                      <div className="lg:col-span-7">{content}</div>
                    </>
                  ) : (
                    <>
                      <div className="lg:col-span-7">{content}</div>
                      <div className="lg:col-span-5">{media}</div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Remaining as horizontal case rows */}
        {visibleRest.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-rule">
              <p className="section-label">Additional production systems</p>
              <span className="font-mono text-xs text-ink-faint">{visibleRest.length} entries</span>
            </div>
            <ul className="divide-y divide-rule border-y border-rule">
              {visibleRest.map((project, idx) => (
                <li key={project.id}>
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8 group">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-accent font-medium">SYS-0{featured.length + idx + 1}</span>
                        <span className="text-rule">·</span>
                        <span className="meta-mono">{project.category}</span>
                      </div>
                      <h3 className="font-display text-xl text-ink group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="md:col-span-5 space-y-3">
                      <p className="font-sans text-sm text-ink-muted leading-relaxed">
                        {project.architecture}
                      </p>
                      {project.flow && <ArchitectureFlow flow={project.flow} />}
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-between gap-4">
                      <StackLine tags={project.tags} />
                      <ProjectLinks project={project} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        )}

        {visibleFeatured.length === 0 && visibleRest.length === 0 && (
          <p className="font-sans text-ink-muted py-12 text-center">No projects in this category.</p>
        )}
      </div>
    </section>
  );
});

export default Portfolio;
