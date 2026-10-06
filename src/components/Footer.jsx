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
        return <FaLinkedin size={16} />;
      case 'FaGithub':
        return <FaGithub size={16} />;
      default:
        return <FaEnvelope size={16} />;
    }
  };

  const socialLinks = SOCIAL_LINKS.map(link => ({
    ...link,
    icon: getIcon(link.icon),
    href: link.url
  }));

  return (
    <footer className="bg-surface border-t border-border text-slate-400 py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-extrabold text-white tracking-wider">
                EB<span className="text-accent">_</span>SYSTEMS
              </span>
              <span className="font-mono text-[10px] text-emerald bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded">
                v2026.1
              </span>
            </div>

            <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-sm">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(link.label.toLowerCase().replace(' ', '_'))}
                  aria-label={link.label}
                  className="w-9 h-9 rounded bg-canvas border border-border flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span className="text-accent/60">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Telemetry Status & Direct Dispatch */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
              Direct Route
            </h4>
            <div className="p-3.5 rounded bg-canvas border border-border space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">ROUTER:</span>
                <span className="text-emerald">ACTIVE · TLS 1.3</span>
              </div>
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:text-accent truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-1.5 rounded hover:bg-surface text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {emailCopied ? <FaCheck className="text-emerald" size={12} /> : <FaCopy size={12} />}
                </button>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-400">
              {PERSONAL_INFO.currentRole}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All systems operational.
          </p>
          <p className="flex items-center gap-2 text-slate-400">
            <span>BUILT WITH REACT + TAILWIND</span>
            <span>·</span>
            <span>AWS CLOUD INFRASTRUCTURE</span>
          </p>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
