import { useState, memo } from 'react'
import { FaGithub, FaStickyNote, FaCloud, FaCubes, FaPoll, FaGraduationCap, FaCalendarCheck, FaTasks, FaServer } from 'react-icons/fa'
import { trackProjectView, trackSocialClick } from '../utils/analytics'
import eventConnectImage from "../assets/images/portfolio/event-connect.webp"
import smartTaskImage from "../assets/images/portfolio/smart-task.webp"
import pulsevoteImage from "../assets/images/portfolio/pulsevote.jpg"
import terraformedImage from "../assets/images/portfolio/terraformed-webpage.png"
import student from "../assets/images/portfolio/student-study-planner.jpeg"
import serverlessImage from "../assets/images/portfolio/serverless-terraform-aws.webp"
import fileServiceImage from "../assets/images/portfolio/file-server.webp"
import { FLAGSHIP } from '../config/constants'

const tagClass = 'px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs rounded-md border border-stone-300 dark:border-stone-600'

const Portfolio = memo(function Portfolio() {
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const portfolios = [
    {
      id: 0,
      src: fileServiceImage,
      title: "Multi-Tenant File Service API",
      product: "Clients request a presigned S3 URL, then PUT the file straight to the bucket. The API never streams bytes: it authenticates the tenant, writes PENDING metadata, and confirms with S3 HeadObject before marking COMPLETED. Tenants send a SHA-256 hashed API key compared in constant time.",
      system: "An Application Load Balancer across two availability zones fronts FastAPI containers on ECS Fargate in private subnets. Metadata lives in RDS PostgreSQL 16 through SQLAlchemy 2.0; binaries land in S3 namespaced as {app_id}/{uuid}-{filename}. Files are addressed by UUIDv4 rather than sequential IDs, every query is scoped by app_id, and cross-tenant reads return 404 so they cannot confirm a file exists. Terraform defines the topology across 12 modules and 3 environments; GitHub Actions runs Ruff, pytest, and coverage.",
      flow: ['Client', 'ALB + FastAPI on ECS Fargate', 'RDS PostgreSQL (metadata)', 'S3 presigned PUT/GET (binaries)'],
      link2: "https://github.com/GeekKwame/file-service-server",
      tags: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "ECS Fargate", "ALB", "RDS", "S3", "Terraform", "Docker", "Boto3", "GitHub Actions"],
      category: "Backend / API",
      icon: FaServer,
      iconText: "Multi-tenant file service AWS architecture"
    },
    {
      id: 1,
      src: smartTaskImage,
      title: "Smart Task Notification System",
      description: "Event-driven serverless task API: a single write fans out to DynamoDB, SNS, SQS, and EventBridge from a Lambda behind API Gateway. SNS/SQS delivery failures are logged without failing the client request. CloudWatch logs, metrics, and a Lambda-error alarm, plus CloudTrail for API audit. Full stack as AWS SAM; pytest + moto in CI.",
      flow: ['API Gateway', 'Lambda', 'DynamoDB + SNS + SQS + EventBridge'],
      link2: "https://github.com/GeekKwame/SmartTaskNotificationSystem",
      tags: ["AWS SAM", "API Gateway", "Lambda", "DynamoDB", "SNS", "SQS", "EventBridge", "CloudWatch", "Python", "Pytest"],
      category: "Serverless",
      icon: FaTasks,
      iconText: "Smart Task Notification System production AWS architecture"
    },
    {
      id: 2,
      src: student,
      title: "Student Study Planner — AWS Capstone",
      description: "Interactive study planner on AWS: Route 53, CloudFront, ALB, EC2 (Nginx), S3, ACM, and GitHub Actions CI/CD. S3 assets behind OAC; ALB security group limited to the CloudFront prefix list; EC2 accepts traffic only from the ALB. Auto Scaling, CloudWatch CPU/5xx alarms, and Budget alerts.",
      link2: "https://github.com/GeekKwame/student-student-planner",
      tags: ["AWS", "CloudFront", "ALB", "Route 53", "Auto Scaling", "EC2", "S3", "ACM", "GitHub Actions"],
      category: "Cloud / IaC",
      icon: FaGraduationCap,
      iconText: "Student Study Planner Architecture"
    },
    {
      id: 3,
      src: eventConnectImage,
      title: "Event-Connect — Serverless Event Registration",
      product: "Browse events, register, and get an on-screen ticket receipt. My tickets stay in this browser (localStorage); email lookup recovers from DynamoDB. Admin session for list-all and cancel.",
      system: "CloudFront was the only public HTTPS endpoint. Private S3 with OAC served the UI; API Gateway sat as a hidden origin behind WAF default-deny. Five Python 3.12 Lambdas persist tickets in DynamoDB. Confirmation is emailed — Gmail may file it as spam; the ticket is DynamoDB plus the receipt, not the inbox. SNS notifies the admin topic only.",
      flow: ['Browser', 'CloudFront (only public HTTPS)', 'Private S3 + hidden API', 'Lambda + DynamoDB'],
      link2: FLAGSHIP.repo,
      tags: ["AWS SAM", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "WAF", "S3 OAC", "SNS", "SES", "Python 3.12"],
      category: "Serverless",
      icon: FaCalendarCheck,
      iconText: "Event-Connect AWS architecture"
    },
    {
      id: 4,
      src: pulsevoteImage,
      title: "PulseVote — Live Polling App",
      description: "Real-time polling app on AWS (CloudFront, ALB, EC2, S3, ACM) with zero-downtime deploys via GitHub Actions, SCP, and SSH. ALB ingress restricted to the CloudFront Managed Prefix List; EC2 ingress solely to the ALB. CloudWatch alarms for CPU and ALB 5xx.",
      link2: "https://github.com/GeekKwame/pulsevote",
      tags: ["AWS", "CloudFront", "ALB", "EC2", "S3", "ACM", "GitHub Actions", "Nginx", "CloudWatch", "Auto Scaling"],
      category: "Cloud / IaC",
      icon: FaPoll,
      iconText: "PulseVote Architecture Diagram"
    },
    {
      id: 5,
      src: terraformedImage,
      title: "Terraformed — Secure Static-Site Infrastructure",
      description: "Zero-secret CI/CD with AWS OIDC and GitHub Actions: short-lived STS credentials on every deploy, no long-lived access keys. S3 origin locked down with CloudFront OAC. Remote Terraform state in S3 with versioning and DynamoDB locking.",
      link2: "https://github.com/GeekKwame/terraformed-project",
      tags: ["Terraform", "AWS S3", "CloudFront", "OAC", "IAM/OIDC", "GitHub Actions", "DynamoDB", "IaC"],
      category: "Cloud / IaC",
      icon: FaCloud,
      iconText: "Terraformed Infrastructure Screenshot"
    },
    {
      id: 6,
      src: serverlessImage,
      title: "Serverless API Platform — Terraform + Lambda",
      description: "API Gateway → Lambda (Python) → S3, provisioned end-to-end in Terraform. Least-privilege IAM scoped to specific S3 actions and API Gateway source ARNs. Lambda packaging and idempotent redeploy via archive_file and source_code_hash. Remote state with S3 + DynamoDB locking.",
      link2: "https://github.com/GeekKwame/terraform-aws-serverless-api",
      tags: ["Terraform", "AWS Lambda", "API Gateway", "S3", "IAM", "DynamoDB", "Python", "Serverless"],
      category: "Serverless",
      icon: FaCubes,
      iconText: "Serverless API Platform Screenshot"
    }
  ];

  const visible = portfolios.filter(p => activeFilter === 'All' || p.category === activeFilter);

  const renderMedia = (project) => {
    const { id, src, title, flow, icon: Icon = FaStickyNote, iconText } = project;
    const fallbackIconText = iconText || `${title} Screenshot`;

    if (imageErrors[id] || !src) {
      return (
        <div className='flex flex-col justify-center p-5 min-h-[200px] bg-ink text-left'>
          <Icon className='text-2xl text-accent-muted mb-3' aria-hidden="true" />
          <p className='text-stone-400 text-xs mb-3'>{fallbackIconText}</p>
          {flow && (
            <ol className='space-y-2 text-sm text-stone-200 font-mono'>
              {flow.map((step, i) => (
                <li key={step} className='flex gap-2'>
                  <span className='text-accent-muted shrink-0'>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      );
    }

    return (
      <div className='relative w-full bg-stone-900 p-2 sm:p-3'>
        {imageLoading[id] !== false && (
          <div className='absolute inset-0 bg-stone-800 animate-pulse rounded' />
        )}
        <img
          src={src}
          alt={`${title} architecture`}
          className='w-full h-auto object-contain rounded relative max-h-64 sm:max-h-72'
          onError={() => handleImageError(id)}
          onLoad={() => setImageLoading(prev => ({ ...prev, [id]: false }))}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  };

  const renderBody = (project) => {
    const { title, product, system, description, tags, link2 } = project;
    return (
      <div className='p-4 sm:p-5 flex flex-col flex-1'>
        <h3 className='text-lg sm:text-xl font-display mb-3 text-ink dark:text-stone-100'>{title}</h3>
        {link2 && (
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackProjectView(title);
              trackSocialClick('github');
            }}
            className='self-start inline-flex items-center gap-2 mb-3 text-sm font-semibold text-ink dark:text-stone-100 border border-stone-300 dark:border-stone-600 rounded-md px-3 py-2 min-h-[44px] hover:bg-stone-100 dark:hover:bg-stone-800'
          >
            <FaGithub /> Code
          </a>
        )}
        {product && (
          <p className='text-stone-700 dark:text-stone-300 text-sm mb-3 leading-relaxed'>
            {product}
          </p>
        )}
        {!product && description && (
          <p className='text-stone-600 dark:text-stone-400 text-sm mb-3 leading-relaxed'>{description}</p>
        )}
        {system && (
          <details className='mb-3'>
            <summary className='cursor-pointer text-sm font-semibold text-accent dark:text-accent-muted'>
              Architecture notes
            </summary>
            <p className='mt-2 text-stone-600 dark:text-stone-400 text-sm leading-relaxed'>{system}</p>
          </details>
        )}
        <div className='flex flex-wrap gap-1.5 mt-auto'>
          {tags.map((tag) => (
            <span key={tag} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div name="portfolio" className='bg-paper dark:bg-ink w-full py-14 md:py-20'>
      <div className='max-w-6xl px-4 sm:px-6 mx-auto flex flex-col justify-center w-full'>
        <div className='mb-8'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl mb-3 text-ink dark:text-stone-50'>
            Work
          </h2>
          <p className='text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl'>
            Selected cloud and software work: a FastAPI file service on ECS, serverless APIs, Terraform, and full AWS stacks. GitHub for each repo.
          </p>
          <div className='accent-rule mt-4'></div>
        </div>

        <div className='flex flex-wrap gap-2 mb-8' role="group" aria-label="Filter work by category">
          {['All', 'Backend / API', 'Serverless', 'Cloud / IaC'].map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-2 rounded-md text-sm font-semibold border min-h-[44px] ${activeFilter === filter
                  ? 'bg-ink dark:bg-stone-100 text-paper dark:text-ink border-ink dark:border-stone-100'
                  : 'bg-transparent text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6'>
          {visible.length === 0 && (
            <p className='text-stone-600 dark:text-stone-400 col-span-full'>No projects in this category.</p>
          )}
          {visible.map((project) => (
            <article
              key={project.id}
              className='flex flex-col rounded-lg overflow-hidden bg-surface dark:bg-surface-dark border border-stone-200 dark:border-stone-700'
            >
              <div className='relative overflow-hidden'>
                {renderMedia(project)}
              </div>
              {renderBody(project)}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Portfolio
