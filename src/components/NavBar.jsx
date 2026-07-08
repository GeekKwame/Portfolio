import React, { useState, useEffect, useRef } from 'react'
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && nav) {
        setNav(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [nav]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav) {
        const menu = document.querySelector('ul.flex.flex-col');
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

  // Prevent body scroll when mobile menu is open
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

  // Focus management for mobile menu
  useEffect(() => {
    if (nav && firstMenuLinkRef.current) {
      // Delay to allow animation to start
      setTimeout(() => firstMenuLinkRef.current?.focus(), 100);
    }
  }, [nav]);

  const links = NAVIGATION_LINKS.map(link => ({
    id: link.id,
    link: link.to,
    label: link.name
  }));

  return (
    <div className={`flex justify-between items-center w-full h-20 fixed top-0 z-50 px-4 md:px-8 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-800' 
        : 'bg-gradient-to-r from-white via-slate-50/50 to-white dark:from-stone-900 dark:via-gray-800 dark:to-stone-900'
    } text-gray-900 dark:text-white`}>
      <Link to="home" smooth duration={500} className='cursor-pointer flex items-center gap-2 sm:gap-3 hover:scale-105 active:scale-95 transition-transform duration-300 group touch-manipulation select-none'>
        <div className='relative flex-shrink-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 group-active:opacity-20 transition-opacity duration-300'></div>
          <div className='relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-500/60 group-hover:shadow-cyan-500/40 transition-all duration-300'>
            <img
              src={profilePic}
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
              loading="eager"
              decoding="async"
              style={{
                objectPosition: 'center 25%',
                imageRendering: 'auto',
                filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
              }}
            />
          </div>
        </div>
        <h1 className='text-base sm:text-xl md:text-2xl lg:text-4xl font-header bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent break-words group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300'>
          {PERSONAL_INFO.name.toUpperCase()}
        </h1>
      </Link>

      <div className='flex items-center gap-3'>
        <div className='hidden md:block'>
          <ThemeToggle />
        </div>
        <ul className='hidden md:flex items-center gap-2'>
          {links.map((linkItem) => (
            <li
              key={linkItem.id}
              className='relative group'
            >
              <Link
                to={linkItem.link}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(linkItem.link)}
                className={`relative px-4 py-2 cursor-pointer capitalize rounded-lg transition-all duration-300 ${activeSection === linkItem.link
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10'
                  : 'text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white hover:bg-cyan-50/50 dark:hover:bg-gray-800/50'
                  }`}
                aria-current={activeSection === linkItem.link ? 'true' : undefined}
              >
                <span className='relative z-10'>{linkItem.label}</span>
                {activeSection === linkItem.link && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'></span>
                )}
                {activeSection !== linkItem.link && (
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300'></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2 md:hidden'>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className='cursor-pointer z-50 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white active:text-cyan-600 dark:active:text-cyan-400 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation select-none'
            onClick={() => {
              const wasOpen = nav;
              setNav(!nav);
              if (wasOpen && menuButtonRef.current) {
                setTimeout(() => menuButtonRef.current?.focus(), 100);
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={nav}
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {nav && (
          <>
            <div
              className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 top-20 touch-manipulation'
              onClick={() => setNav(false)}
              onTouchStart={() => setNav(false)}
              aria-hidden="true"
            />
            <ul className='flex flex-col justify-start fixed items-center h-screen top-20 left-0 w-full bg-gradient-to-b from-white/98 via-slate-50/98 to-white/98 dark:from-stone-900/98 dark:to-gray-800/98 backdrop-blur-md animate-slide-in z-40 overflow-y-auto pb-20 border-r border-gray-200/50 dark:border-gray-800'>
              {links.map((linkItem) => (
                <li
                  className='w-full flex justify-center'
                  key={linkItem.id}
                >
                  <Link
                    ref={linkItem.id === 1 ? firstMenuLinkRef : undefined}
                    onClick={() => {
                      setNav(false);
                      setTimeout(() => menuButtonRef.current?.focus(), 600);
                    }}
                    to={linkItem.link}
                    smooth
                    duration={500}
                    className='text-gray-300 hover:text-cyan-400 active:text-cyan-500 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-6 py-4 text-2xl sm:text-3xl min-h-[60px] flex items-center justify-center w-full max-w-xs touch-manipulation select-none'
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
