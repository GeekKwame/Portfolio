/**
 * Application Constants
 * Centralized configuration for easy maintenance and updates
 */

/** LinkedIn headline — single source of truth for positioning across the site */
export const HEADLINE =
  'Cloud & Software Engineer | AWS · Terraform · Docker · Kubernetes | Python · Django · React | CI/CD · DevOps | Open to Opportunities';

/** Contact email — single source of truth for mailto, contact form, and footer */
export const CONTACT_EMAIL = 'dogbeblessingkwame@gmail.com';

export const SEO = {
  title: 'Edmund Blessing — Cloud & Software Engineer Portfolio',
  description:
    'Cloud & Software Engineer with 2+ years deploying production systems on AWS using Terraform, Docker, and Kubernetes. Python & Django backend, React frontend, CI/CD with GitHub Actions. Open to opportunities.',
  keywords:
    'Cloud Engineer, Software Engineer, AWS, Terraform, Docker, Kubernetes, Python Developer, Django, React, DevOps, CI/CD, GitHub Actions, Machine Learning, Full Stack Developer, Ghana, Portfolio',
  ogSiteName: 'Edmund Blessing Portfolio',
};

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  title: 'Cloud & Software Engineer',
  headline: HEADLINE,
  bio: 'Cloud & Software Engineer deploying production systems on AWS with Terraform, Docker, and Kubernetes. Python & Django backend, React frontend, CI/CD pipelines—open to opportunities.',
  intro:
    'Cloud & Software Engineer with 2+ years deploying production systems on AWS (EC2, S3, CloudFront, ALB, Auto Scaling, CloudWatch) using Terraform and containerized workloads. I build REST APIs with Django, automate zero-downtime CI/CD pipelines with GitHub Actions, and deliver secure, scalable full-stack solutions.',
  location: 'Available worldwide',
  availability: 'Open to opportunities — freelance, full-time, and collaboration.',
  email: CONTACT_EMAIL,
};

export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edmund-blessing/',
    icon: 'FaLinkedin',
    color: 'hover:text-blue-400',
    label: 'Connect on LinkedIn',
  },
  {
    id: 2,
    platform: 'GitHub',
    url: 'https://github.com/GeekKwame',
    icon: 'FaGithub',
    color: 'hover:text-gray-300',
    label: 'View my GitHub',
  },
  {
    id: 3,
    platform: 'Email',
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'FaEnvelope',
    color: 'hover:text-red-400',
    label: 'Send me an email',
  },
];

export const NAVIGATION_LINKS = [
  { id: 1, name: 'Home', to: 'home' },
  { id: 2, name: 'About', to: 'about' },
  { id: 3, name: 'Education', to: 'education' },
  { id: 4, name: 'Portfolio', to: 'portfolio' },
  { id: 5, name: 'Experience', to: 'experience' },
  { id: 6, name: 'Contact', to: 'contact' },
];

/** Rotating roles on the home hero — derived from the LinkedIn headline */
export const ROLES = [
  'Cloud & Software Engineer',
  'AWS & Terraform Engineer',
  'Python & Django Developer',
  'Full-Stack Developer',
  'DevOps & CI/CD Practitioner',
];

export const RESUME = {
  filename: 'Edmund_Blessing_Resume.pdf',
  path: '/resume.pdf',
};

export const TOAST_DURATION = {
  SHORT: 2000,
  MEDIUM: 4000,
  LONG: 6000,
};

export const THEME = {
  STORAGE_KEY: 'portfolio-theme',
  DARK: 'dark',
  LIGHT: 'light',
};
