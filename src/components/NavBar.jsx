import { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
import profilePic from "../assets/images/profile/profile-pic.jpeg"
import ThemeToggle from "./ThemeToggle"
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../config/constants'

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

  const links = NAVIGATION_LINKS.map(link => ({
    id: link.id,
    link: link.to,
    label: link.name
  }));

  return (
    <div className={`flex justify-between items-center w-full h-16 sm:h-20 fixed top-0 z-50 px-3 sm:px-6 lg:px-8 ${
      scrolled
        ? 'bg-paper/95 dark:bg-ink/95 border-b border-stone-200 dark:border-stone-800'
        : 'bg-paper dark:bg-ink'
    } text-ink dark:text-stone-100`}>
      <Link to="home" smooth duration={500} offset={-80} aria-label={`${PERSONAL_INFO.name}, home`} className='cursor-pointer flex items-center gap-2 min-w-0 touch-manipulation'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-stone-300 dark:border-stone-600 shrink-0'>
          <img
            src={profilePic}
            alt=""
            className='w-full h-full object-cover'
            loading="eager"
            decoding="async"
            style={{ objectPosition: 'center 25%' }}
          />
        </div>
        <span className='font-display text-base sm:text-lg lg:text-xl truncate text-ink dark:text-stone-100'>
          {PERSONAL_INFO.name}
        </span>
      </Link>

      <div className='flex items-center gap-2 shrink-0'>
        <div className='hidden lg:block'>
          <ThemeToggle />
        </div>
        <ul className='hidden lg:flex items-center gap-1'>
          {links.map((linkItem) => (
            <li key={linkItem.id}>
              <Link
                to={linkItem.link}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(linkItem.link)}
                className={`px-3 py-2 cursor-pointer text-sm rounded-md ${activeSection === linkItem.link
                  ? 'text-accent dark:text-accent-muted font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-ink dark:hover:text-stone-100'
                  }`}
                aria-current={activeSection === linkItem.link ? 'true' : undefined}
              >
                {linkItem.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-1 lg:hidden'>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className='text-ink dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2 min-w-[44px] min-h-[44px] flex items-center justify-center'
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
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {nav && (
          <>
            <div
              className='fixed inset-0 bg-ink/50 z-40 top-16 sm:top-20'
              onClick={() => setNav(false)}
              aria-hidden="true"
            />
            <ul id="mobile-nav" data-mobile-nav className='flex flex-col fixed items-stretch top-16 sm:top-20 left-0 w-full bg-paper dark:bg-ink z-40 overflow-y-auto pb-16 border-b border-stone-200 dark:border-stone-800'>
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
                    className='text-ink dark:text-stone-200 px-6 py-4 text-xl min-h-[52px] flex items-center'
                  >
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div >
  )
}

export default NavBar
