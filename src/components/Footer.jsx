import { useState, memo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { trackSocialClick } from '../utils/analytics';
import { PERSONAL_INFO, SOCIAL_LINKS, NAVIGATION_LINKS } from '../config/constants';
import { useToastContext } from '../context/ToastContext';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  const { success } = useToastContext();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      trackSocialClick('email_footer');
      success('Email copied to clipboard');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin size={15} />;
      case 'FaGithub':
        return <FaGithub size={15} />;
      default:
        return <FaEnvelope size={15} />;
    }
  };

  const socialLinks = SOCIAL_LINKS.map((link) => ({
    ...link,
    icon: getIcon(link.icon),
    href: link.url,
  }));

  return (
    <footer className="border-t border-rule bg-paper text-ink-muted py-12 lg:py-16">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5 space-y-3">
            <p className="font-display text-xl text-ink tracking-tight">
              {PERSONAL_INFO.name}
            </p>
            <p className="font-mono text-xs text-accent font-medium">
              {PERSONAL_INFO.title} · Accra, Ghana
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm pt-1">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(link.label.toLowerCase().replace(' ', '_'))}
                  aria-label={link.label}
                  className="w-8 h-8 border border-rule bg-paper-elevated flex items-center justify-center text-ink-muted hover:text-ink hover:border-ink transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="meta-mono text-ink">Index</p>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link, idx) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-ink-faint">0{idx + 1}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="meta-mono text-ink">Direct Inquiry</p>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-xs text-ink hover:text-accent truncate transition-colors underline decoration-rule underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="p-1.5 text-ink-muted hover:text-ink transition-colors shrink-0"
                aria-label="Copy email"
              >
                {emailCopied ? <FaCheck className="text-signal" size={11} /> : <FaCopy size={11} />}
              </button>
            </div>
            <p className="font-sans text-xs text-ink-faint pt-1">
              {PERSONAL_INFO.currentRole}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="meta-mono">
            © {currentYear} {PERSONAL_INFO.name} · Systems & Cloud Engineering
          </p>
          <p className="meta-mono">
            Production release · Fast, static, accessible
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
