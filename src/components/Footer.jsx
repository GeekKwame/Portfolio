import { memo } from 'react';
import { PERSONAL_INFO, SECTION_INDEX } from '../config/constants';

const Footer = memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-ink bg-ink text-paper/70">
      <div className="shell">
        <div className="border-t border-rule-dark pt-10 pb-24 sm:pb-10 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <p className="lg:col-span-3 text-sm text-paper-raised">
            © {year} {PERSONAL_INFO.name}
          </p>

          <nav aria-label="Footer" className="lg:col-span-5 mt-6 lg:mt-0">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {SECTION_INDEX.map((item) => (
                <li key={item.to}>
                  <a href={`#${item.to}`} className="inline-flex min-h-[32px] items-center text-sm hover:text-paper-raised transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="lg:col-span-4 mt-6 lg:mt-0 text-sm leading-relaxed lg:text-right">
            Set in Newsreader and IBM Plex. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
