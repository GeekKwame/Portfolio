/**
 * Application Constants
 * Centralized configuration for easy maintenance and updates
 */

/** LinkedIn headline — single source of truth for positioning across the site */
export const HEADLINE =
  'Cloud & Software Engineer | AWS · Terraform · Python · FastAPI · Django · React | CI/CD · DevOps | Open to Opportunities';

/** Contact email — single source of truth for mailto, contact form, and footer */
export const CONTACT_EMAIL = 'dogbeblessingkwame@gmail.com';

export const SEO = {
  title: 'Edmund Blessing — Cloud & Software Engineer',
  description:
    'Cloud & Software Engineer in Ghana. AWS, Terraform, Python, FastAPI, Django, React, and GitHub Actions. Software Engineer intern at AmaliTech. Open to opportunities.',
  keywords:
    'Cloud Engineer, Software Engineer, AWS, Terraform, Lambda, CloudFront, DynamoDB, ECS Fargate, RDS, Docker, Python Developer, FastAPI, Django, PostgreSQL, React, DevOps, CI/CD, GitHub Actions, Ghana, Portfolio',
  ogSiteName: 'Edmund Blessing Portfolio',
};

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  title: 'Cloud & Software Engineer',
  headline: HEADLINE,
  bio: 'Cloud & Software Engineer. AWS, Terraform, Python, FastAPI, Django, React, GitHub Actions. Software Engineer intern at AmaliTech. Open to opportunities.',
  intro:
    'I design and operate cloud systems, write Python APIs in FastAPI and Django, and ship CI/CD with Terraform and GitHub Actions. Right now I am a Software Engineer intern at AmaliTech.',
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
    color: 'hover:text-accent dark:hover:text-accent-muted',
    label: 'Connect on LinkedIn',
  },
  {
    id: 2,
    platform: 'GitHub',
    url: 'https://github.com/GeekKwame',
    icon: 'FaGithub',
    color: 'hover:text-accent dark:hover:text-accent-muted',
    label: 'View my GitHub',
  },
  {
    id: 3,
    platform: 'Email',
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'FaEnvelope',
    color: 'hover:text-accent dark:hover:text-accent-muted',
    label: 'Send me an email',
  },
];

export const NAVIGATION_LINKS = [
  { id: 1, name: 'About', to: 'about' },
  { id: 2, name: 'Education', to: 'education' },
  { id: 3, name: 'Work', to: 'portfolio' },
  { id: 4, name: 'Experience', to: 'experience' },
  { id: 5, name: 'Contact', to: 'contact' },
];

/** Event-Connect repo only — live CloudFront URL omitted (stack being torn down). */
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

export const THEME = {
  STORAGE_KEY: 'portfolio-theme',
  DARK: 'dark',
  LIGHT: 'light',
};
