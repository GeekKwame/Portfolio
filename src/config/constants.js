/**
 * Application Constants
 * Centralized configuration for Edmund Blessing's Engineering Portfolio
 */

/** LinkedIn headline — single source of truth for positioning across the site */
export const HEADLINE =
  'Software Engineer | Python · FastAPI · Django · React | AWS · Terraform · CI/CD | Open to Opportunities';

/** Contact email — single source of truth for mailto, contact form, and footer */
export const CONTACT_EMAIL = 'dogbeblessingkwame@gmail.com';

export const SEO = {
  title: 'Edmund Blessing — Software & Cloud Systems Engineer',
  description:
    'Software Engineer in Ghana building Python APIs (FastAPI & Django), React interfaces, and automated AWS cloud infrastructure (Terraform, Docker, CI/CD). Software Engineer at Afarinick Company Limited.',
  keywords:
    'Software Engineer, Cloud Engineer, AWS, Terraform, Docker, FastAPI, Django, Python Developer, PostgreSQL, React, Linux, DevOps, CI/CD, GitHub Actions, Ghana, Portfolio',
  ogSiteName: 'Edmund Blessing Portfolio',
};

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  title: 'Software & Cloud Systems Engineer',
  headline: HEADLINE,
  bio: 'Software Engineer building high-reliability Python APIs, Django applications, and React interfaces — backed by declarative AWS cloud infrastructure, Docker, and GitHub Actions CI/CD.',
  intro:
    'I build and operate resilient software systems — high-throughput Python APIs in FastAPI and Django, modern React frontends, and production-grade AWS infrastructure managed declaratively with Terraform.',
  currentRole: 'Software Engineer at Afarinick Company Limited',
  location: 'Accra, Ghana · Available Worldwide',
  availability: 'Open to full-time engineering roles, freelance infrastructure, and technical collaborations.',
  email: CONTACT_EMAIL,
};

export const TELEMETRY_METRICS = [
  {
    id: 1,
    value: '70+',
    label: 'Clinic Views & Workflows',
    detail: 'Engineered for campus outpatient queue platform (YɛnCare)',
  },
  {
    id: 2,
    value: '8+',
    label: 'Production & Internal Services',
    detail: 'FastAPI, Django, AWS serverless & container microservices',
  },
  {
    id: 3,
    value: '10+',
    label: 'Cloud & IaC Architectures',
    detail: 'Multi-environment Terraform modules, AWS SAM, ECS Fargate',
  },
  {
    id: 4,
    value: '200+',
    label: 'Enterprise Users Supported',
    detail: 'Tier-1/2 campus IT operations and POS retail infrastructure',
  },
];

export const TECH_TICKER = [
  'AWS CLOUD',
  'TERRAFORM IAC',
  'DOCKER CONTAINERS',
  'FASTAPI',
  'PYTHON',
  'DJANGO REST FRAMEWORK',
  'POSTGRESQL',
  'GITHUB ACTIONS CI/CD',
  'LINUX (UBUNTU)',
  'REDIS CACHING',
  'ECS FARGATE',
  'CLOUDFRONT & OAC',
  'AWS LAMBDA',
  'API GATEWAY',
  'REACT',
  'BASH SCRIPTING',
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edmund-blessing/',
    icon: 'FaLinkedin',
    label: 'Connect on LinkedIn',
  },
  {
    id: 2,
    platform: 'GitHub',
    url: 'https://github.com/GeekKwame',
    icon: 'FaGithub',
    label: 'View GitHub Profile',
  },
  {
    id: 3,
    platform: 'Email',
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'FaEnvelope',
    label: 'Send direct email',
  },
];

export const NAVIGATION_LINKS = [
  { id: 1, name: 'About', to: 'about' },
  { id: 2, name: 'Capabilities', to: 'skills' },
  { id: 3, name: 'Architecture & Work', to: 'portfolio' },
  { id: 4, name: 'Experience', to: 'experience' },
  { id: 5, name: 'Education', to: 'education' },
  { id: 6, name: 'Contact', to: 'contact' },
];

/** Flagship project link */
export const FLAGSHIP = {
  name: 'Event-Connect',
  repo: 'https://github.com/GeekKwame/event-registration-system-sam/',
};

export const RESUME = {
  filename: 'Edmund_Blessing_Resume.pdf',
  path: '/resume.pdf',
};

export const TOAST_DURATION = {
  SHORT: 2000,
  MEDIUM: 4000,
  LONG: 6000,
};
