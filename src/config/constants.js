/**
 * Application Constants
 * Centralized configuration for easy maintenance and updates
 */

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  title: 'Full Stack Developer',
  email: 'dogbeblessingkwame@gmail.com',
  bio: 'Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences.',
  location: 'Available worldwide',
  availability: 'Available for freelance projects and full-time opportunities.',
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
    url: 'mailto:dogbeblessingkwame@gmail.com',
    icon: 'FaEnvelope',
    color: 'hover:text-red-400',
    label: 'Send me an email',
  },
];

export const NAVIGATION_LINKS = [
  { id: 1, name: 'Home', to: 'home' },
  { id: 2, name: 'About', to: 'about' },
  { id: 3, name: 'Portfolio', to: 'portfolio' },
  { id: 4, name: 'Experience', to: 'experience' },
  { id: 5, name: 'Contact', to: 'contact' },
];

export const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Python Engineer',
  'Problem Solver',
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

