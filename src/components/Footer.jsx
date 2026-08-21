import { useState, memo } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { trackSocialClick } from '../utils/analytics'
import { PERSONAL_INFO, SOCIAL_LINKS, NAVIGATION_LINKS } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  const { success } = useToastContext();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      trackSocialClick('email');
      success('Email copied');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin />;
      case 'FaGithub':
        return <FaGithub />;
      default:
        return <FaEnvelope />;
    }
  };

  const socialLinks = SOCIAL_LINKS.map(link => ({
    ...link,
    icon: getIcon(link.icon),
    href: link.url
  }));

  return (
    <footer className='bg-paper dark:bg-ink text-ink dark:text-stone-200 border-t border-stone-200 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='font-display text-xl text-ink dark:text-stone-100 mb-3'>
              {PERSONAL_INFO.name}
            </h3>
            <p className='text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4'>
              {PERSONAL_INFO.bio}
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(link.label.toLowerCase().replace(' ', '_'))}
                  aria-label={link.label}
                  className='text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent-muted text-lg'
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='font-semibold mb-3 text-ink dark:text-stone-100'>On this site</h4>
            <ul className='space-y-2'>
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className='text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent-muted cursor-pointer text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-3 text-ink dark:text-stone-100'>Get in touch</h4>
            <div className='flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400'>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className='hover:text-accent dark:hover:text-accent-muted break-all min-w-0'
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={copyEmailToClipboard}
                className='p-2 rounded-md hover:bg-stone-200 dark:hover:bg-stone-800 shrink-0'
                aria-label="Copy email"
              >
                {emailCopied ? <FaCheck className='text-green-600' /> : <FaCopy />}
              </button>
            </div>
            <p className='text-stone-500 dark:text-stone-500 text-xs mt-4'>
              {PERSONAL_INFO.availability}
            </p>
          </div>
        </div>

        <div className='border-t border-stone-200 dark:border-stone-800 pt-6'>
          <p className='text-stone-500 text-xs sm:text-sm'>
            © {currentYear} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
