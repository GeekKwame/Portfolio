import { useState, memo } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaLock, 
  FaServer, 
  FaTasks, 
  FaGraduationCap, 
  FaCalendarCheck, 
  FaPoll, 
  FaCloud, 
  FaCubes, 
  FaClinicMedical,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight
} from 'react-icons/fa';
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
    title: "YɛnCare — Outpatient Clinic & Virtual Queue Platform",
    category: "Full-Stack",
    categoryLabel: "FULL-STACK HEALTHCARE SYSTEM",
    product: "Full-stack outpatient clinic platform handling patient triage, appointment rosters, and real-time waiting room dispatch across 70+ responsive views. Built for campus clinics to eliminate waiting-room congestion through self-service booking without password friction and live queue updates.",
    system: "The Express REST backend guards public arrival check-ins against reference-code brute forcing using tiered IP/reference rate limiting (HTTP 429), coordinates atomic queue status transitions through Prisma ORM, and isolates clinical workstation actions behind role-based JWT auth. 270+ automated Jest/Supertest specs run on GitHub Actions across client and server suites.",
    flow: ['Patient / Student Web UI (React)', 'Express REST API + Tiered Rate Limiting', 'Prisma ORM + PostgreSQL', 'Real-Time Queue Dispatch & Role Workstation'],
    link: "https://yencare-platform.vercel.app/",
    isPrivate: true,
    tags: ["React", "Express", "Node.js", "Prisma", "PostgreSQL", "REST APIs", "JWT Auth", "Jest", "Supertest", "GitHub Actions", "Tailwind CSS", "Vercel"],
    icon: FaClinicMedical,
    iconText: "YɛnCare Outpatient Healthcare & Virtual Queue Platform"
  },
  {
    id: 0,
    src: fileServiceImage,
    title: "Multi-Tenant File Service API",
    category: "Backend / API",
    categoryLabel: "BACKEND & CLOUD STORAGE ARCHITECTURE",
    product: "Clients request a presigned S3 URL, then PUT the file straight to the bucket. The API never streams bytes: it authenticates the tenant, writes PENDING metadata, and confirms with S3 HeadObject before marking COMPLETED. Tenants send a SHA-256 hashed API key compared in constant time.",
    system: "An Application Load Balancer across two availability zones fronts FastAPI containers on ECS Fargate in private subnets. Metadata lives in RDS PostgreSQL 16 through SQLAlchemy 2.0; binaries land in S3 namespaced as {app_id}/{uuid}-{filename}. Files are addressed by UUIDv4 rather than sequential IDs, every query is scoped by app_id, and cross-tenant reads return 404 so they cannot confirm a file exists. Terraform defines the topology across 12 modules and 3 environments; GitHub Actions runs Ruff, pytest, and coverage.",
    flow: ['Client App', 'ALB + FastAPI on ECS Fargate', 'RDS PostgreSQL (Metadata)', 'S3 Presigned PUT/GET (Binaries)'],
    link2: "https://github.com/GeekKwame/file-service-server",
    tags: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "ECS Fargate", "ALB", "RDS", "S3", "Terraform", "Docker", "Boto3", "GitHub Actions"],
    icon: FaServer,
    iconText: "Multi-tenant file service AWS architecture"
  },
  {
    id: 3,
    src: eventConnectImage,
    title: "Event-Connect — Serverless Event Registration",
    category: "Serverless",
    categoryLabel: "SERVERLESS AWS ARCHITECTURE",
    product: "Browse events, register, and get an on-screen ticket receipt. My tickets stay in this browser (localStorage); email lookup recovers from DynamoDB. Admin session for list-all and cancel.",
    system: "CloudFront was the only public HTTPS endpoint. Private S3 with OAC served the UI; API Gateway sat as a hidden origin behind WAF default-deny. Five Python 3.12 Lambdas persist tickets in DynamoDB. Confirmation is emailed via SES — DynamoDB maintains primary ticket validity. SNS notifies the administrative topic on registration events.",
    flow: ['Browser Client', 'CloudFront + S3 (OAC)', 'WAF Guarded API Gateway', '5x Python Lambda Functions + DynamoDB'],
    link2: FLAGSHIP.repo,
    tags: ["AWS SAM", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "WAF", "S3 OAC", "SNS", "SES", "Python 3.12"],
    icon: FaCalendarCheck,
    iconText: "Event-Connect AWS architecture"
  },
  {
    id: 1,
    src: smartTaskImage,
    title: "Smart Task Notification System",
    category: "Serverless",
    categoryLabel: "EVENT-DRIVEN SERVERLESS PIPELINE",
    product: "Event-driven asynchronous task distribution system: a single write fans out to DynamoDB, SNS, SQS, and EventBridge from a Lambda behind API Gateway. Decouples client acknowledgment from downstream notifications.",
    system: "SNS/SQS delivery failures are logged without failing the client request. CloudWatch logs, metrics, and a Lambda-error alarm provide telemetry, plus CloudTrail for API audit. Full infrastructure declared via AWS SAM; pytest + moto unit testing executed in GitHub Actions CI.",
    flow: ['API Gateway', 'Ingestion Lambda', 'DynamoDB State Store', 'SNS + SQS + EventBridge Fanout'],
    link2: "https://github.com/GeekKwame/SmartTaskNotificationSystem",
    tags: ["AWS SAM", "API Gateway", "Lambda", "DynamoDB", "SNS", "SQS", "EventBridge", "CloudWatch", "Python", "Pytest"],
    icon: FaTasks,
    iconText: "Smart Task Notification System production AWS architecture"
  },
  {
    id: 2,
    src: student,
    title: "Student Study Planner — AWS Capstone",
    category: "Cloud / IaC",
    categoryLabel: "HIGH-AVAILABILITY CLOUD INFRASTRUCTURE",
    product: "Interactive study planner application on AWS: Route 53, CloudFront, Application Load Balancer, EC2 Auto Scaling (Nginx), S3, ACM, and GitHub Actions CI/CD.",
    system: "S3 static assets placed strictly behind CloudFront Origin Access Control (OAC). The ALB security group is limited to the CloudFront Managed Prefix List; EC2 instances in private subnets accept traffic solely from the ALB. Includes Auto Scaling policies, CloudWatch CPU/5xx alarms, and AWS Budget alerts.",
    flow: ['Route 53 DNS', 'CloudFront CDN', 'ALB (Managed Prefix List)', 'Auto Scaling EC2 (Nginx) + S3 (OAC)'],
    link2: "https://github.com/GeekKwame/student-student-planner",
    tags: ["AWS", "CloudFront", "ALB", "Route 53", "Auto Scaling", "EC2", "S3", "ACM", "GitHub Actions"],
    icon: FaGraduationCap,
    iconText: "Student Study Planner Architecture"
  },
  {
    id: 4,
    src: pulsevoteImage,
    title: "PulseVote — Live Polling App",
    category: "Cloud / IaC",
    categoryLabel: "PRODUCTION AWS INFRASTRUCTURE",
    product: "Real-time polling application deployed on AWS infrastructure with high-availability routing, automated SSL termination, and automated zero-downtime deployment pipelines.",
    system: "Built with CloudFront, ALB, EC2, S3, and ACM with zero-downtime deploys orchestrated via GitHub Actions, SCP, and SSH. ALB ingress restricted to the CloudFront Managed Prefix List; EC2 ingress strictly to the ALB. CloudWatch alarms monitor CPU thresholds and ALB 5xx error anomalies.",
    flow: ['Public Internet', 'CloudFront + ACM SSL', 'ALB Ingress Filter', 'EC2 Application Tier + CloudWatch'],
    link2: "https://github.com/GeekKwame/pulsevote",
    tags: ["AWS", "CloudFront", "ALB", "EC2", "S3", "ACM", "GitHub Actions", "Nginx", "CloudWatch", "Auto Scaling"],
    icon: FaPoll,
    iconText: "PulseVote Architecture Diagram"
  },
  {
    id: 5,
    src: terraformedImage,
    title: "Terraformed — Secure Static-Site Infrastructure",
    category: "Cloud / IaC",
    categoryLabel: "DECLARATIVE TERRAFORM & OIDC",
    product: "Zero-secret CI/CD deployment architecture using AWS IAM OpenID Connect (OIDC) and GitHub Actions. Eliminates long-lived static AWS access keys entirely from repository secrets.",
    system: "S3 origin locked down with CloudFront Origin Access Control (OAC). Short-lived STS credentials requested on every workflow run. Remote Terraform state managed securely in encrypted S3 with DynamoDB state locking to prevent concurrent modifications.",
    flow: ['GitHub Actions Push', 'AWS STS OIDC Federation', 'Terraform Plan/Apply', 'Encrypted S3 + DynamoDB State Lock'],
    link2: "https://github.com/GeekKwame/terraformed-project",
    tags: ["Terraform", "AWS S3", "CloudFront", "OAC", "IAM/OIDC", "GitHub Actions", "DynamoDB", "IaC"],
    icon: FaCloud,
    iconText: "Terraformed Infrastructure Screenshot"
  },
  {
    id: 6,
    src: serverlessImage,
    title: "Serverless API Platform — Terraform + Lambda",
    category: "Serverless",
    categoryLabel: "TERRAFORM SERVERLESS PROVISIONING",
    product: "Full serverless microservice pipeline (API Gateway → Python Lambda → S3) provisioned end-to-end declaratively in Terraform.",
    system: "Strict least-privilege IAM policies scoped to specific S3 actions and API Gateway source ARNs. Lambda deployment artifacts packaged and deployed idempotently using archive_file and source_code_hash tracking. Remote state secured with S3 versioning and DynamoDB locking.",
    flow: ['Terraform IaC', 'API Gateway Endpoint', 'Scoped IAM Role', 'Python Lambda Handler → S3 Bucket'],
    link2: "https://github.com/GeekKwame/terraform-aws-serverless-api",
    tags: ["Terraform", "AWS Lambda", "API Gateway", "S3", "IAM", "DynamoDB", "Python", "Serverless"],
    icon: FaCubes,
    iconText: "Serverless API Platform Screenshot"
  }
];

const CATEGORIES = ['All', 'Cloud / IaC', 'Backend / API', 'Serverless', 'Full-Stack'];

const Portfolio = memo(function Portfolio() {
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedArchitectures, setExpandedArchitectures] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const toggleArchitecture = (id) => {
    setExpandedArchitectures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const visible = PROJECTS.filter(p => activeFilter === 'All' || p.category === activeFilter);

  return (
    <section name="portfolio" className="bg-canvas w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {"// 03. SYSTEMS ARCHITECTURE & CASE STUDIES"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Featured Engineering Work
              </h2>
              <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mt-2">
                Production-grade applications, multi-tier AWS cloud architectures, and declarative Terraform configurations.
              </p>
            </div>

            {/* Filter Pills */}
            <div 
              className="flex flex-wrap gap-2 p-1.5 rounded-lg bg-surface border border-border shrink-0"
              role="group"
              aria-label="Filter engineering work by category"
            >
              {CATEGORIES.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`px-3.5 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider transition-all min-h-[36px] ${
                    activeFilter === filter
                      ? 'bg-accent text-canvas font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-surface-elevated'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="w-16 h-0.5 bg-accent mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visible.map((project) => {
            const isArchExpanded = !!expandedArchitectures[project.id];
            const hasMedia = project.src && !imageErrors[project.id];

            return (
              <article
                key={project.id}
                className="tech-card border-border bg-surface/90 flex flex-col justify-between overflow-hidden group hover:border-slate-600 transition-all duration-300"
              >
                <div>
                  {/* Card Header & Kicker */}
                  <div className="p-5 sm:p-6 border-b border-border/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <project.icon className="text-accent text-sm" />
                      <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {project.isPrivate ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400 bg-canvas px-2.5 py-1 rounded border border-border">
                        <FaLock size={9} /> Private Repo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald bg-emerald/10 px-2.5 py-1 rounded border border-emerald/20 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Active Repo
                      </span>
                    )}
                  </div>

                  {/* Visual Image / Architecture Preview */}
                  <div className="relative w-full bg-canvas border-b border-border/80 overflow-hidden min-h-[220px] max-h-[300px] flex items-center justify-center p-3">
                    {hasMedia ? (
                      <>
                        {imageLoading[project.id] !== false && (
                          <div className="absolute inset-0 bg-surface animate-pulse" />
                        )}
                        <img
                          src={project.src}
                          alt={`${project.title} architecture diagram or interface`}
                          className="w-full h-auto max-h-[280px] object-contain rounded transition-transform duration-500 group-hover:scale-[1.02]"
                          onError={() => handleImageError(project.id)}
                          onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col justify-center p-6 text-left font-mono">
                        <project.icon className="text-2xl text-accent mb-2" />
                        <span className="text-xs text-slate-400 mb-3">{project.iconText}</span>
                        {project.flow && (
                          <div className="space-y-1.5 text-xs text-slate-300">
                            {project.flow.map((step, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-accent font-bold">{idx + 1}.</span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem & Product Context */}
                    <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.product}
                    </p>

                    {/* Interactive Architecture Node Flow */}
                    {project.flow && (
                      <div className="p-3.5 rounded bg-canvas border border-border">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                          Architectural Request Lifecycle:
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                          {project.flow.map((node, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5">
                              <span className="px-2 py-1 rounded bg-surface border border-border text-slate-200">
                                {node}
                              </span>
                              {i < project.flow.length - 1 && (
                                <span className="text-accent text-xs">
                                  <FaArrowRight size={9} />
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expandable Architecture Notes */}
                    {project.system && (
                      <div className="border border-border/70 rounded-md overflow-hidden bg-canvas/60">
                        <button
                          type="button"
                          onClick={() => toggleArchitecture(project.id)}
                          className="w-full px-4 py-2.5 flex items-center justify-between text-left font-mono text-xs text-slate-300 hover:text-white hover:bg-surface/60 transition-colors"
                        >
                          <span className="font-semibold text-accent">
                            {isArchExpanded ? '[-] Hide System Specifications' : '[+] View Deep Architecture Specifications'}
                          </span>
                          {isArchExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                        </button>
                        {isArchExpanded && (
                          <div className="p-4 border-t border-border/70 font-sans text-xs text-slate-300 leading-relaxed space-y-2">
                            <p>{project.system}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions & Stack Tags */}
                <div className="p-5 sm:p-6 border-t border-border/80 bg-surface-muted/40 space-y-4">
                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackProjectView(project.title);
                          trackSocialClick('live_demo');
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent text-canvas font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent-hover transition-colors min-h-[40px]"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>Live Platform</span>
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-canvas hover:bg-surface-elevated border border-border hover:border-slate-500 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors min-h-[40px]"
                      >
                        <FaGithub size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-canvas border border-border/80 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
});

export default Portfolio;
