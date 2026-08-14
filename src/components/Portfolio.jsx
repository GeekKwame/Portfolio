import React, { useState, memo } from 'react'
import { FaExternalLinkAlt, FaGithub, FaStickyNote, FaCloud, FaCubes, FaPoll, FaGraduationCap, FaCalendarCheck, FaTasks } from 'react-icons/fa'
import { trackProjectView, trackSocialClick } from '../utils/analytics'
import eventConnectImage from "../assets/images/portfolio/event-connect.webp"
import smartTaskImage from "../assets/images/portfolio/smart-task.webp"
import pulsevoteImage from "../assets/images/portfolio/pulsevote.jpg"
import terraformedImage from "../assets/images/portfolio/terraformed-webpage.png"
import student from "../assets/images/portfolio/student-study-planner.png"
import serverlessImage from "../assets/images/portfolio/serverless-terraform-aws.png"
import { FLAGSHIP } from '../config/constants'

const Portfolio = memo(function Portfolio() {
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const portfolios = [
    {
      id: 1,
      src: eventConnectImage,
      title: "Event-Connect — Serverless Event Registration",
      product: "Browse events, register, and get an on-screen ticket receipt. My tickets stays in this browser (localStorage); email lookup recovers from DynamoDB. Admin session for list-all and cancel.",
      system: "CloudFront is the only public HTTPS endpoint. Private S3 with OAC serves the UI; API Gateway is a hidden origin behind WAF default-deny. Five Python 3.12 Lambdas persist tickets in DynamoDB. Confirmation is emailed — Gmail may file it as spam; the ticket is DynamoDB plus the receipt, not the inbox. SNS notifies the admin topic only.",
      flow: ['Browser', 'CloudFront (only public HTTPS)', 'Private S3 + hidden API', 'Lambda + DynamoDB'],
      link1: FLAGSHIP.live,
      link2: FLAGSHIP.repo,
      tags: ["AWS SAM", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "WAF", "S3 OAC", "SNS", "SES", "Python 3.12"],
      category: "Serverless",
      featured: true,
      icon: FaCalendarCheck,
      iconText: "Event-Connect production AWS architecture"
    },
    {
      id: 2,
      src: smartTaskImage,
      title: "Smart Task Notification System",
      description: "Event-driven serverless task API: a single write fans out to DynamoDB, SNS, SQS, and EventBridge from a Lambda behind API Gateway. SNS/SQS delivery failures are logged without failing the client request. CloudWatch logs, metrics, and a Lambda-error alarm, plus CloudTrail for API audit. Full stack as AWS SAM; pytest + moto in CI.",
      flow: ['API Gateway', 'Lambda', 'DynamoDB + SNS + SQS + EventBridge'],
      link1: "",
      link2: "https://github.com/GeekKwame/SmartTaskNotificationSystem",
      tags: ["AWS SAM", "API Gateway", "Lambda", "DynamoDB", "SNS", "SQS", "EventBridge", "CloudWatch", "Python", "Pytest"],
      category: "Serverless",
      icon: FaTasks,
      iconText: "Smart Task Notification System production AWS architecture"
    },
    {
      id: 3,
      src: student,
      title: "Student Study Planner — AWS Capstone",
      description: "Interactive study planner on AWS: Route 53, CloudFront, ALB, EC2 (Nginx), S3, ACM, and GitHub Actions CI/CD. S3 assets behind OAC; ALB security group limited to the CloudFront prefix list; EC2 accepts traffic only from the ALB. Auto Scaling, CloudWatch CPU/5xx alarms, and Budget alerts.",
      link1: "",
      link2: "https://github.com/GeekKwame/student-student-planner",
      tags: ["AWS", "CloudFront", "ALB", "Route 53", "Auto Scaling", "EC2", "S3", "ACM", "GitHub Actions"],
      category: "Cloud / IaC",
      icon: FaGraduationCap,
      iconText: "Student Study Planner Architecture"
    },
    {
      id: 4,
      src: pulsevoteImage,
      title: "PulseVote — Live Polling App",
      description: "Real-time polling app on AWS (CloudFront, ALB, EC2, S3, ACM) with zero-downtime deploys via GitHub Actions, SCP, and SSH. ALB ingress restricted to the CloudFront Managed Prefix List; EC2 ingress solely to the ALB. CloudWatch alarms for CPU and ALB 5xx.",
      link1: "",
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
      link1: "",
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
      link1: "",
      link2: "https://github.com/GeekKwame/terraform-aws-serverless-api",
      tags: ["Terraform", "AWS Lambda", "API Gateway", "S3", "IAM", "DynamoDB", "Python", "Serverless"],
      category: "Serverless",
      icon: FaCubes,
      iconText: "Serverless API Platform Screenshot"
    }
  ];

  const visible = portfolios.filter(p => activeFilter === 'All' || p.category === activeFilter);
  const featuredItems = visible.filter(p => p.featured);
  const otherItems = visible.filter(p => !p.featured);

  const renderMedia = (project) => {
    const { id, src, title, flow, icon: Icon = FaStickyNote, iconText } = project;
    const fallbackIconText = iconText || `${title} Screenshot`;

    if (imageErrors[id] || !src) {
      return (
        <div className='flex flex-col justify-center p-6 md:p-8 min-h-[220px] bg-slate-900 text-left'>
          <Icon className='text-3xl text-teal-300 mb-4' aria-hidden="true" />
          <p className='text-slate-300 text-xs uppercase tracking-widest mb-3'>{fallbackIconText}</p>
          {flow && (
            <ol className='space-y-2 text-sm text-slate-100 font-mono'>
              {flow.map((step, i) => (
                <li key={step} className='flex gap-2'>
                  <span className='text-teal-300 shrink-0'>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      );
    }

    return (
      <div className='relative w-full bg-slate-950 p-2 md:p-4'>
        {imageLoading[id] !== false && (
          <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg' />
        )}
        <img
          src={src}
          alt={`${title} architecture`}
          className='w-full h-auto object-contain rounded-lg relative'
          onError={() => handleImageError(id)}
          onLoad={() => setImageLoading(prev => ({ ...prev, [id]: false }))}
          loading="lazy"
          decoding="async"
          style={{ maxHeight: project.featured ? '420px' : '320px' }}
        />
      </div>
    );
  };

  const renderBody = (project, featured) => {
    const { title, product, system, description, tags, link1, link2 } = project;
    return (
      <div className={`p-4 sm:p-6 ${featured ? 'lg:p-8 flex flex-col justify-center' : ''}`}>
        {featured && (
          <span className='self-start mb-3 px-2.5 py-1 text-xs font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
            Featured
          </span>
        )}
        <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-slate-100'>{title}</h3>
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4'>
          {link1 && (
            <a
              href={link1}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live site`}
              className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 hover:from-blue-500 hover:to-cyan-500 dark:hover:from-teal-500 dark:hover:to-sky-600 rounded-lg text-white font-semibold transition-colors duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400'
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                trackProjectView(title);
                trackSocialClick('github');
              }}
              className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-800 dark:bg-slate-700 hover:bg-gray-700 dark:hover:bg-slate-600 rounded-lg text-white font-semibold transition-colors duration-200 border border-gray-600 dark:border-slate-500 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400'
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
        {product && (
          <p className='text-gray-700 dark:text-slate-200 text-sm md:text-base mb-3 leading-relaxed'>
            {product}
          </p>
        )}
        {!product && description && (
          <p className='text-gray-600 dark:text-slate-300 text-sm md:text-base mb-3 leading-relaxed'>{description}</p>
        )}
        {system && (
          <details className='mb-4 group'>
            <summary className='cursor-pointer text-sm font-semibold text-cyan-800 dark:text-teal-300 list-none flex items-center gap-2'>
              <span>Edge and backend</span>
              <span className='text-gray-500 dark:text-slate-400 font-normal group-open:hidden'>Show</span>
              <span className='text-gray-500 dark:text-slate-400 font-normal hidden group-open:inline'>Hide</span>
            </summary>
            <p className='mt-2 text-gray-600 dark:text-slate-300 text-sm leading-relaxed'>{system}</p>
          </details>
        )}
        <div className='flex flex-wrap gap-1.5 sm:gap-2'>
          {tags.map((tag) => (
            <span key={tag} className='px-2 py-1 bg-cyan-500/10 dark:bg-teal-500/10 text-cyan-800 dark:text-teal-200 text-xs rounded-md border border-cyan-500/30 dark:border-teal-500/25'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div name="portfolio" className='bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 dark:bg-slate-950 dark:bg-none dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 w-full py-12 md:py-20'>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mb-8 md:mb-12'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-slate-50'>
            Work
          </p>
          <p className='py-2 text-gray-600 dark:text-slate-200 text-base sm:text-lg max-w-2xl'>
            Product UIs on CloudFront. APIs stay private. Infrastructure in SAM and Terraform.
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        <div className='flex flex-wrap gap-2 sm:gap-3 mb-8'>
          {['All', 'Serverless', 'Cloud / IaC'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer border min-h-[44px] ${activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                  : 'bg-white dark:bg-slate-800/80 text-gray-700 dark:text-slate-300 border-gray-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-teal-400/50 hover:text-cyan-700 dark:hover:text-slate-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='space-y-8'>
          {featuredItems.map((project) => (
            <article
              key={project.id}
              className='rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg'
            >
              <div className='grid lg:grid-cols-2'>
                <div className='relative overflow-hidden bg-slate-950'>
                  {renderMedia(project)}
                </div>
                {renderBody(project, true)}
              </div>
            </article>
          ))}

          <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
            {otherItems.map((project) => (
              <article
                key={project.id}
                className='rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-md'
              >
                <div className='relative overflow-hidden bg-slate-950'>
                  {renderMedia(project)}
                </div>
                {renderBody(project, false)}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default Portfolio
