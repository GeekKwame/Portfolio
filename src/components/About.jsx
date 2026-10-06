import { memo } from 'react';
import { 
  FaServer, 
  FaCloud, 
  FaCogs, 
  FaCode, 
  FaTerminal, 
  FaCheckCircle 
} from 'react-icons/fa';
import CurrentlyBuilding from './CurrentlyBuilding';
import { PERSONAL_INFO } from '../config/constants';

const CAPABILITIES = [
  {
    id: 'cloud',
    icon: <FaCloud className="text-accent text-xl" />,
    badge: 'AWS & INFRASTRUCTURE',
    title: 'Cloud Architecture & IaC',
    description:
      'Designing production-grade, highly available AWS cloud environments provisioned immutably using Terraform and AWS SAM. Zero-secret deployments via GitHub Actions OIDC and least-privilege IAM policies.',
    coreItems: [
      'Terraform multi-environment modules & remote S3 state locking',
      'AWS ECS Fargate container workloads & Application Load Balancers',
      'Serverless architectures: API Gateway, Lambda, DynamoDB, S3/OAC',
      'VPC networking, private subnets, security groups, and AWS WAF',
    ],
  },
  {
    id: 'backend',
    icon: <FaServer className="text-accent text-xl" />,
    badge: 'API & DISTRIBUTED SYSTEMS',
    title: 'Backend Engineering & APIs',
    description:
      'Engineering robust, high-throughput REST APIs and asynchronous microservices in Python. Strict data validation with Pydantic, high-performance database schema modeling, and tenant isolation.',
    coreItems: [
      'FastAPI & Django REST Framework application backends',
      'PostgreSQL schema design, indexing, and SQLAlchemy 2.0 ORM',
      'Presigned URL pipelines for direct-to-S3 high-volume storage',
      'Constant-time SHA-256 API key authentication & rate limiting',
    ],
  },
  {
    id: 'devops',
    icon: <FaCogs className="text-accent text-xl" />,
    badge: 'CI/CD & AUTOMATION',
    title: 'DevOps & Linux Operations',
    description:
      'Automating build, test, and release lifecycles. Creating reproducible container images, robust Bash automation scripts, and continuous observability with CloudWatch metrics and alarms.',
    coreItems: [
      'GitHub Actions automated pipelines with Ruff, pytest, & Jest',
      'Docker multi-stage builds optimized for minimal attack surface',
      'Linux (Ubuntu) server configuration, systemd services, and SSH',
      'CloudWatch monitoring, metric filters, and SLA budget alerts',
    ],
  },
  {
    id: 'fullstack',
    icon: <FaCode className="text-accent text-xl" />,
    badge: 'CLIENT APPLICATIONS',
    title: 'Full-Stack Integration',
    description:
      'Developing responsive, state-driven user interfaces in React that interact seamlessly with distributed backend APIs. Thorough automated testing across both client and server layers.',
    coreItems: [
      'React frontend applications with modular component architecture',
      'Tailwind CSS design systems with dark-mode and accessibility focus',
      'Client-side state management, JWT sessions, and route guards',
      'Jest and Supertest automated test suites for continuous validation',
    ],
  },
];

const STACK_GROUPS = [
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS ECS Fargate', 'AWS Lambda', 'API Gateway', 'S3 + OAC', 'CloudFront', 'VPC & ALB', 'RDS PostgreSQL', 'DynamoDB', 'AWS WAF', 'Terraform', 'AWS SAM'],
  },
  {
    category: 'Backend & Data',
    items: ['Python 3.12', 'FastAPI', 'Django', 'Django REST Framework', 'SQLAlchemy 2.0', 'PostgreSQL 16', 'Pydantic', 'Prisma ORM', 'Redis', 'Boto3'],
  },
  {
    category: 'DevOps & Platform',
    items: ['Docker', 'GitHub Actions', 'AWS IAM & OIDC', 'Linux / Ubuntu', 'Bash Scripting', 'CloudWatch', 'Pytest', 'Ruff Linter', 'Git'],
  },
  {
    category: 'Frontend & UI',
    items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'RESTful Client Integration', 'Responsive Design', 'Jest / Supertest'],
  },
];

const About = memo(function About() {
  return (
    <section name="about" className="w-full bg-canvas text-slate-200 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {"// 01. PROFILE & FOUNDATIONS"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering Identity
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mt-2">
            Bridging software development and cloud operations with mathematical rigor and production experience.
          </p>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Narrative & Active Role Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. My engineering discipline centers on building reliable software services and orchestrating the cloud infrastructure required to keep them secure, scalable, and automated.
            </p>
            <p>
              With a background in <strong className="text-slate-100 font-medium">Applied Mathematics from Kwame Nkrumah University of Science and Technology (KNUST)</strong>, I approach systems design through algorithmic correctness, structured data flow, and quantifiable reliability.
            </p>
            <p>
              I do not treat infrastructure as an afterthought. Whether provisioning an ECS Fargate cluster with Terraform, engineering zero-secret OIDC deployment pipelines, or writing FastAPI endpoints for presigned S3 uploads, my focus is always on production viability, clean separation of concerns, and least privilege.
            </p>
            
            <div className="pt-2">
              <CurrentlyBuilding />
            </div>
          </div>

          {/* Right Architecture Focus Blueprint */}
          <div className="lg:col-span-5">
            <div className="tech-card p-6 border-border bg-surface/90 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                <span className="font-mono text-xs text-accent uppercase font-bold flex items-center gap-2">
                  <FaTerminal size={11} />
                  Operational Principles
                </span>
                <span className="font-mono text-[11px] text-slate-400">ENGINEERING_DNA</span>
              </div>

              <ul className="space-y-4 font-sans text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Immutable Infrastructure</strong>
                    <span>All production resources declared declaratively via Terraform or AWS SAM — zero manual drift.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Zero-Secret CI/CD</strong>
                    <span>Deployments authenticate to AWS via short-lived STS tokens using OpenID Connect (OIDC).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Multi-Tenant Isolation</strong>
                    <span>Application queries strictly scoped by tenant ID with constant-time cryptographic hash verification.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Automated Test Verification</strong>
                    <span>Rigorous CI workflows covering unit, integration, linting (Ruff/ESLint), and coverage gates.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Grid (Anchor for Navigation) */}
        <div id="skills" name="skills" className="scroll-mt-24 pt-6">
          <div className="flex flex-col mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                {"// 02. TECHNICAL ARCHITECTURE & DOMAINS"}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Core Technical Capabilities
            </h3>
            <p className="text-slate-400 font-sans text-sm sm:text-base max-w-xl mt-1">
              Detailed domain expertise across cloud systems, backend services, DevOps pipelines, and user applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="tech-card p-6 sm:p-7 border-border bg-surface/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-canvas border border-border flex items-center justify-center">
                      {cap.icon}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                      {cap.badge}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {cap.title}
                  </h4>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                <div className="border-t border-border/80 pt-4">
                  <p className="font-mono text-[11px] uppercase text-slate-400 mb-2.5 font-semibold">
                    Key Implementations:
                  </p>
                  <ul className="space-y-1.5 font-sans text-xs text-slate-300">
                    {cap.coreItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Tools Matrix */}
          <div className="tech-card p-6 sm:p-8 border-border bg-surface/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4 mb-6">
              <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <FaTerminal className="text-accent" />
                Production Stack & Verified Tooling
              </h4>
              <span className="font-mono text-xs text-slate-400">
                TECHNOLOGIES UTILIZED IN ACTIVE CODEBASES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STACK_GROUPS.map((group) => (
                <div key={group.category} className="space-y-3">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                    {group.category}
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-canvas border border-border text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

export default About;
