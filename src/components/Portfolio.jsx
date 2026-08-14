import React, { useState, memo } from 'react'
import { FaExternalLinkAlt, FaGithub, FaStickyNote, FaCloud, FaCubes, FaPoll, FaGraduationCap, FaCalendarCheck, FaTasks } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackProjectView, trackSocialClick } from '../utils/analytics'
import eventConnectImage from "../assets/images/portfolio/event-connect.png"
import pulsevoteImage from "../assets/images/portfolio/pulsevote.jpg"
import terraformedImage from "../assets/images/portfolio/terraformed-webpage.png"
import student from "../assets/images/portfolio/student-study-planner.png"
import serverlessImage from "../assets/images/portfolio/serverless-terraform-aws.png"

const Portfolio = memo(function Portfolio() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
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
      description: "CloudFront is the only public HTTPS endpoint. Private S3 with OAC serves the UI; API Gateway is a hidden origin behind WAF default-deny and an origin-verify header. Five Python 3.12 Lambdas write tickets to DynamoDB (events-prod, registrations-prod). Browse events, register, see an on-screen receipt, and recover tickets from this browser (localStorage) or by email. Confirmation is emailed — Gmail may file it as spam; the ticket is DynamoDB plus the on-screen receipt, not the inbox. Admin session for list-all and cancel. SNS notifies the admin topic only.",
      link1: "https://d3mbqhiwlx08nz.cloudfront.net",
      link2: "https://github.com/GeekKwame/event-registration-system-sam/",
      tags: ["AWS SAM", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "WAF", "S3 OAC", "SNS", "SES", "Secrets Manager", "Python 3.12"],
      category: "Serverless",
      featured: true,
      icon: FaCalendarCheck,
      iconText: "Event-Connect production AWS architecture"
    },
    {
      id: 2,
      src: null,
      title: "Smart Task Notification System",
      description: "Event-driven serverless task API: a single write fans out to DynamoDB, SNS, SQS, and EventBridge from a Lambda behind API Gateway. SNS/SQS delivery failures are logged without failing the client request. CloudWatch logs, metrics, and a Lambda-error alarm, plus CloudTrail for API audit. Full stack as AWS SAM; pytest + moto in CI.",
      link1: "",
      link2: "https://github.com/GeekKwame/SmartTaskNotificationSystem",
      tags: ["AWS SAM", "API Gateway", "Lambda", "DynamoDB", "SNS", "SQS", "EventBridge", "CloudWatch", "Python", "Pytest"],
      category: "Serverless",
      icon: FaTasks,
      iconText: "Smart Task Notification System"
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

  return (
    <div name="portfolio" ref={sectionRef} className='bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 dark:from-stone-900 dark:to-gray-800 w-full min-h-screen py-12 md:py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            Portfolio
          </p>
          <p className='py-2 md:py-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg'>Production AWS work — CloudFront-only public edges, SAM/Lambda, Terraform, and CI/CD</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-2 sm:gap-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {['All', 'Serverless', 'Cloud / IaC'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer border ${activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600/50 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-gray-700/50 shadow-sm dark:shadow-none'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {portfolios.filter(p => activeFilter === 'All' || p.category === activeFilter).map(({ id, src, title, description, link1, link2, tags, featured, icon: Icon = FaStickyNote, iconText }, index) => {
            const fallbackIconText = iconText || `${title} Screenshot`;
            return (
              <div
                key={id}
                className={`group relative shadow-lg dark:shadow-xl shadow-gray-200 dark:shadow-gray-900/50 rounded-xl overflow-hidden bg-white/90 dark:bg-gradient-to-br dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image Area */}
                <div className='relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
                  {featured && (
                    <span className='absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'>
                      Featured
                    </span>
                  )}
                  {imageErrors[id] || !src ? (
                    <div className='flex flex-col items-center justify-center p-8 min-h-[300px] md:min-h-[400px]'>
                      <Icon className='text-6xl md:text-8xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300' />
                      <p className='text-gray-400 text-sm'>{fallbackIconText}</p>
                    </div>
                  ) : Array.isArray(src) ? (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        {src.map((imgSrc, imgIndex) => (
                          <div key={imgIndex} className='relative overflow-hidden rounded-lg'>
                            {imageLoading[`${id}-${imgIndex}`] !== false && (
                              <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg' />
                            )}
                            <img
                              src={imgSrc}
                              alt={`${title} - Screenshot ${imgIndex + 1}`}
                              className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform relative'
                              onError={() => handleImageError(id)}
                              onLoad={() => setImageLoading(prev => ({ ...prev, [`${id}-${imgIndex}`]: false }))}
                              loading="lazy"
                              decoding="async"
                              style={{ maxHeight: '400px' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      {imageLoading[id] !== false && (
                        <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg' />
                      )}
                      <img
                        src={src}
                        alt={`${title} - Project Screenshot`}
                        className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform relative'
                        onError={() => handleImageError(id)}
                        onLoad={() => setImageLoading(prev => ({ ...prev, [id]: false }))}
                        loading="lazy"
                        decoding="async"
                        style={{ maxHeight: '500px' }}
                      />
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>

                <div className='p-4 sm:p-6'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'>{description}</p>

                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
                    {tags.map((tag, i) => (
                      <span key={i} className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs sm:text-xs rounded-md border border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/30 group-hover:scale-105 transition-all duration-300'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4'>
                    {link1 && (
                      <a
                        href={link1}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${title} live site`}
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 active:from-blue-600 active:to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50 touch-manipulation select-none min-h-[44px] group-hover:animate-pulse'
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
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-600 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 touch-manipulation select-none min-h-[44px]'
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
})

export default Portfolio
