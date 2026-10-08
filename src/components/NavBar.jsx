import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { PERSONAL_INFO, NAVIGATION_LINKS, RESUME } from '../config/constants';
import { trackResumeDownload } from '../utils/analytics';

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
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

  const links = NAVIGATION_LINKS.map((link, index) => ({
    id: link.id,
    link: link.to,
    label: link.name,
    number: `0${index + 1}`,
  }));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-paper/95 border-b border-rule backdrop-blur-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="section-inner h-16 sm:h-[4.25rem] flex items-center justify-between gap-4">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          aria-label={`${PERSONAL_INFO.name}, back to top`}
          className="cursor-pointer group focus:outline-none inline-flex items-baseline gap-2.5"
        >
          <span className="font-display text-lg sm:text-xl text-ink tracking-tight group-hover:text-accent transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-ink-faint border-l border-rule pl-2.5">
            Systems & Cloud
          </span>
        </Link>

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
              className={`relative px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeSection === linkItem.link
                  ? 'text-ink font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
              aria-current={activeSection === linkItem.link ? 'true' : undefined}
            >
              {linkItem.label}
              {activeSection === linkItem.link && (
                <span
                  className="absolute left-3 right-3 -bottom-1 h-0.5 bg-accent"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={RESUME.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-ink border border-rule bg-paper-elevated hover:border-ink hover:text-accent transition-all duration-150 min-h-[34px]"
          >
            <span>Resume</span>
            <span className="text-[10px] text-ink-faint" aria-hidden="true">↗</span>
          </a>

          <button
            ref={menuButtonRef}
            className="lg:hidden text-ink px-2.5 py-1.5 border border-rule bg-paper-elevated hover:border-ink focus:outline-none min-h-[38px] flex items-center gap-2"
            onClick={() => {
              const wasOpen = nav;
              setNav(!nav);
              if (wasOpen && menuButtonRef.current) {
                setTimeout(() => menuButtonRef.current?.focus(), 100);
              }
            }}
            aria-label={nav ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={nav}
            aria-controls="mobile-nav"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink">
              {nav ? 'Close' : 'Menu'}
            </span>
            <div className="w-3.5 h-2.5 flex flex-col justify-between py-[1px]" aria-hidden="true">
              <span
                className={`block h-[1.5px] w-full bg-ink transition-all duration-200 origin-center ${
                  nav ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-ink transition-all duration-200 origin-center ${
                  nav ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {nav && (
        <>
          <div
            className="fixed inset-0 bg-ink/30 z-40 top-16 sm:top-[4.25rem]"
            onClick={() => setNav(false)}
            aria-hidden="true"
          />
          <ul
            id="mobile-nav"
            data-mobile-nav
            className="flex flex-col fixed top-16 sm:top-[4.25rem] left-0 w-full bg-paper-elevated border-b border-rule z-40 px-5 py-5 space-y-1 shadow-lg"
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
                  className={`flex items-center justify-between py-3 px-3 font-mono text-xs uppercase tracking-wider ${
                    activeSection === linkItem.link
                      ? 'text-accent font-medium border-l-2 border-accent pl-[10px]'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  <span>{linkItem.number} — {linkItem.label}</span>
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-rule mt-2">
              <a
                href={RESUME.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setNav(false);
                  trackResumeDownload();
                }}
                className="flex items-center justify-between py-2.5 px-3 border border-rule bg-paper text-ink font-mono text-xs uppercase tracking-wider hover:border-ink hover:text-accent transition-colors"
              >
                <span>Download Resume (PDF)</span>
                <span className="text-ink-faint">↗</span>
              </a>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

export default NavBar;
