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
  title: 'Edmund Blessing — Cloud & Backend Engineer',
  description:
    'Cloud & Backend Engineer in Ghana building Python APIs (FastAPI & Django) and AWS infrastructure with Terraform, Docker, and CI/CD. Software Engineer at Afarinick Company Limited.',
  keywords:
    'Software Engineer, Cloud Engineer, AWS, Terraform, Docker, FastAPI, Django, Python Developer, PostgreSQL, React, Linux, DevOps, CI/CD, GitHub Actions, Ghana, Portfolio',
  ogSiteName: 'Edmund Blessing Portfolio',
};

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  fullName: 'Blessing Edmund Kwame Dogbe',
  title: 'Cloud & Backend Engineer',
  headline: HEADLINE,
  bio: 'Cloud and backend engineer building production Python APIs and AWS infrastructure with Terraform, Docker, and CI/CD.',
  intro:
    'I design and operate production systems — Python APIs, AWS infrastructure as code, and CI/CD that ships without drama.',
  currentRole: 'Software Engineer at Afarinick Company Limited',
  location: 'Accra, Ghana',
  availability: 'Open to full-time engineering roles, freelance infrastructure work, and technical collaborations.',
  email: CONTACT_EMAIL,
};

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
  { id: 2, name: 'Skills', to: 'skills' },
  { id: 3, name: 'Work', to: 'portfolio' },
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
