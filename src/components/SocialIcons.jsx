import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../config/constants';
import { trackSocialClick } from '../utils/analytics';

const ICONS = { FaLinkedin: FaLinkedinIn, FaGithub, FaEnvelope };

/** Row of round outlined icon buttons for every social link. */
function SocialIcons({ source = 'hero', className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.icon];
        const external = !link.url.startsWith('mailto:');
        return (
          <li key={link.id}>
            <a
              href={link.url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={() => trackSocialClick(`${link.platform.toLowerCase()}_${source}`)}
              aria-label={external ? `${link.label} (opens in a new tab)` : link.label}
              title={link.platform}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 text-ink opacity-70
                transition-[opacity,transform,border-color] duration-300 hover:opacity-100 hover:border-ink hover:scale-110"
            >
              {Icon && <Icon size={18} aria-hidden="true" />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialIcons;
