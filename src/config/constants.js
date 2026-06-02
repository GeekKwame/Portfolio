/**
 * Application Constants
 * Centralized configuration for easy maintenance and updates
 */

/** LinkedIn headline — single source of truth for positioning across the site */
export const HEADLINE =
  'Aspiring AI & Cloud Engineer | Python, SQL, Machine Learning | Full-Stack Dev | IT Support | Open to Opportunities';

/** Contact email — single source of truth for mailto, contact form, and footer */
export const CONTACT_EMAIL = 'dogbeblessingkwame@gmail.com';

export const SEO = {
  title: 'Edmund Blessing — AI & Cloud Engineer Portfolio',
  description:
    'Aspiring AI & Cloud Engineer skilled in Python, SQL, and Machine Learning. Full-stack developer and IT support professional. Open to opportunities.',
  keywords:
    'AI Engineer, Cloud Engineer, Python Developer, SQL, Machine Learning, Full Stack Developer, IT Support, AWS, React, Django, Portfolio, Ghana',
  ogSiteName: 'Edmund Blessing Portfolio',
};

export const PERSONAL_INFO = {
  name: 'Edmund Blessing',
  title: 'Aspiring AI & Cloud Engineer',
  headline: HEADLINE,
  bio: 'Aspiring AI & Cloud Engineer with strengths in Python, SQL, and Machine Learning. Full-stack developer and IT support professional—open to opportunities.',
  intro:
    'Aspiring AI & Cloud Engineer building toward cloud and AI roles, with hands-on experience in Python, SQL, machine learning, full-stack development, and IT support. I turn complex problems into reliable, user-focused solutions—and I am open to new opportunities.',
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
  'Aspiring AI & Cloud Engineer',
  'Python & SQL Developer',
  'Machine Learning Enthusiast',
  'Full-Stack Developer',
  'IT Support Professional',
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
