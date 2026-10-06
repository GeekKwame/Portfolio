import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/images/profile/profile-pic.jpeg';
import { PERSONAL_INFO, NAVIGATION_LINKS, RESUME, SOCIAL_LINKS } from '../config/constants';
import { trackSocialClick, trackResumeDownload } from '../utils/analytics';

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const githubLink = SOCIAL_LINKS.find((l) => l.platform === 'GitHub');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && nav) {
        setNav(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [nav]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav) {
        const menu = document.querySelector('ul[data-mobile-nav]');
        const button = document.querySelector('button[aria-label="Toggle menu"]');
        if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
          setNav(false);
        }
      }
    };
    if (nav) {
      setTimeout(() => document.addEventListener('click', handleClickOutside), 100);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [nav]);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  useEffect(() => {
    if (nav && firstMenuLinkRef.current) {
      setTimeout(() => firstMenuLinkRef.current?.focus(), 100);
    }
  }, [nav]);

  const links = NAVIGATION_LINKS.map((link) => ({
    id: link.id,
    link: link.to,
    label: link.name,
  }));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          aria-label={`${PERSONAL_INFO.name}, back to top`}
          className="cursor-pointer flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-md py-1 px-1.5"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-border group-hover:border-accent transition-colors shrink-0 bg-surface">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              loading="eager"
              decoding="async"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-slow" />
              <span className="font-mono text-[11px] text-slate-400">
                Cloud & Software Engineer
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {links.map((linkItem) => (
            <Link
              key={linkItem.id}
              to={linkItem.link}
              smooth
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={() => setActiveSection(linkItem.link)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                activeSection === linkItem.link
                  ? 'text-accent font-semibold bg-accent/10 border border-accent/30'
                  : 'text-slate-400 hover:text-white hover:bg-surface border border-transparent'
              }`}
              aria-current={activeSection === linkItem.link ? 'true' : undefined}
            >
              {linkItem.label}
            </Link>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-3">
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('github')}
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:border-slate-500 bg-surface hover:bg-surface-elevated text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
          )}

          <a
            href={RESUME.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-md bg-accent text-canvas hover:bg-accent-hover transition-colors shadow-sm"
          >
            <FaFileDownload size={12} />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden text-slate-200 hover:text-white p-2 rounded-md border border-border bg-surface hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent min-w-[40px] min-h-[40px] flex items-center justify-center"
            onClick={() => {
              const wasOpen = nav;
              setNav(!nav);
              if (wasOpen && menuButtonRef.current) {
                setTimeout(() => menuButtonRef.current?.focus(), 100);
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={nav}
            aria-controls="mobile-nav"
          >
            {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {nav && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 top-16 sm:top-20"
            onClick={() => setNav(false)}
            aria-hidden="true"
          />
          <ul
            id="mobile-nav"
            data-mobile-nav
            className="flex flex-col fixed top-16 sm:top-20 left-0 w-full bg-surface border-b border-border z-40 px-6 py-6 space-y-2 shadow-2xl"
          >
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <Link
                  ref={linkItem.id === 1 ? firstMenuLinkRef : undefined}
                  onClick={() => {
                    setNav(false);
                    setTimeout(() => menuButtonRef.current?.focus(), 600);
                  }}
                  to={linkItem.link}
                  smooth
                  duration={500}
                  offset={-80}
                  className={`flex items-center justify-between py-3 px-4 rounded-md font-mono text-sm uppercase tracking-wider ${
                    activeSection === linkItem.link
                      ? 'bg-accent/10 text-accent border border-accent/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-surface-elevated'
                  }`}
                >
                  <span>{linkItem.label}</span>
                  <span className="text-slate-500 font-mono text-xs">→</span>
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-border flex items-center gap-3">
              <a
                href={RESUME.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setNav(false);
                  trackResumeDownload();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md bg-accent text-canvas font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <FaFileDownload size={14} />
                <span>Resume</span>
              </a>
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setNav(false);
                    trackSocialClick('github');
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-md border border-border bg-surface-elevated text-slate-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
              )}
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

export default NavBar;
