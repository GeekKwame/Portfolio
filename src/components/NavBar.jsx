import { useState, useEffect, useRef, useCallback } from 'react';
import { PERSONAL_INFO, NAVIGATION_LINKS, SECTION_INDEX, RESUME, SOCIAL_LINKS } from '../config/constants';
import { trackResumeDownload, trackSocialClick } from '../utils/analytics';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = ['work', 'experience', 'about', 'skills', 'education', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    // A section is "active" while it crosses a thin band just below the header.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return active;
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  // While the menu is open: lock scroll, make the page behind it inert, close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const background = [...document.querySelectorAll('#main, footer, [data-menu-inert]')];
    background.forEach((el) => el.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    const onKey = (e) => { if (e.key === 'Escape') close(); };
    const onResize = () => { if (window.innerWidth >= 1024) close(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    return () => {
      background.forEach((el) => el.removeAttribute('inert'));
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  const github = SOCIAL_LINKS.find((l) => l.platform === 'GitHub');
  const linkedin = SOCIAL_LINKS.find((l) => l.platform === 'LinkedIn');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md transition-[border-color] duration-200 border-b ${
        scrolled || open ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          aria-label={`${PERSONAL_INFO.name}, back to top`}
          className="inline-flex min-h-[44px] items-center font-display text-[1.75rem] leading-none text-ink transition-opacity hover:opacity-70"
        >
          {PERSONAL_INFO.name.split(' ').map((part) => part[0]).join('')}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = active === link.to;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.to}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative inline-flex items-center min-h-[44px] px-3 text-[0.9375rem] transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.name}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-2 h-px bg-accent origin-left transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={RESUME.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload()}
            className="hidden sm:inline-flex btn-secondary !min-h-[40px] !px-4 !text-sm"
            aria-label="Resume, PDF (opens in a new tab)"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center gap-2.5 min-h-[44px] px-3 -mr-3 text-[0.9375rem] text-ink"
          >
            {open ? 'Close' : 'Menu'}
            <span aria-hidden="true" className="relative block h-2.5 w-4">
              <span className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-200 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute left-0 bottom-0 h-px w-4 bg-ink transition-transform duration-200 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper border-t border-rule">
          <nav aria-label="Site menu" className="shell py-6">
            <ol>
              {NAVIGATION_LINKS.map((link, i) => (
                <li key={link.id} className="border-b border-rule">
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={`#${link.to}`}
                    onClick={() => close(false)}
                    aria-current={active === link.to ? 'location' : undefined}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-meta text-accent-strong">{SECTION_INDEX.find((s) => s.to === link.to)?.number}</span>
                    <span className={`font-sans font-black tracking-[-0.03em] text-[2rem] leading-tight ${active === link.to ? 'text-ink-muted' : 'text-ink'}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ol>

            <ul className="mt-8 space-y-1 text-[0.9375rem]">
              <li>
                <a href={RESUME.path} target="_blank" rel="noopener noreferrer"
                  onClick={() => { trackResumeDownload(); close(false); }}
                  className="flex min-h-[44px] items-center justify-between text-ink">
                  Resume (PDF) <span aria-hidden="true" className="text-ink-muted">↗</span>
                </a>
              </li>
              <li>
                <a href={github.url} target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('github_menu')}
                  className="flex min-h-[44px] items-center justify-between text-ink">
                  GitHub <span aria-hidden="true" className="text-ink-muted">↗</span>
                </a>
              </li>
              <li>
                <a href={linkedin.url} target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('linkedin_menu')}
                  className="flex min-h-[44px] items-center justify-between text-ink">
                  LinkedIn <span aria-hidden="true" className="text-ink-muted">↗</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex min-h-[44px] items-center text-ink-muted break-all">
                  {PERSONAL_INFO.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default NavBar;
