import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-scroll';
import { trackResumeDownload } from '../utils/analytics'
import profilePic from "../assets/images/profile/profile-pic.jpeg"
import { PERSONAL_INFO, ROLES, RESUME, FLAGSHIP } from '../config/constants'

const roles = ROLES;

const articleFor = (role) => (/^[aeiou]/i.test(role.trim()) ? 'an' : 'a');

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplayText(roles[0]);
      setIsTyping(false);
      return;
    }

    const tick = () => {
      const currentRole = roles[roleIndexRef.current];
      if (!isDeletingRef.current) {
        charIndexRef.current++;
        setDisplayText(currentRole.substring(0, charIndexRef.current));
        if (charIndexRef.current === currentRole.length) {
          setIsTyping(false);
          isDeletingRef.current = true;
          return 2000;
        }
        return 100;
      } else {
        setIsTyping(true);
        charIndexRef.current--;
        setDisplayText(currentRole.substring(0, charIndexRef.current));
        if (charIndexRef.current === 0) {
          isDeletingRef.current = false;
          const next = (roleIndexRef.current + 1) % roles.length;
          roleIndexRef.current = next;
          setRoleIndex(next);
          return 500;
        }
        return 50;
      }
    };

    let timeoutId;
    const loop = () => {
      const delay = tick();
      timeoutId = setTimeout(loop, delay);
    };
    loop();

    return () => clearTimeout(timeoutId);
  }, []);

  const article = articleFor(roles[roleIndex]);

  const ctaClass =
    'group relative w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg text-base sm:text-lg font-semibold duration-200 active:scale-[0.98] transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950 touch-manipulation select-none min-h-[48px]';

  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:bg-slate-950 dark:bg-none dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 relative overflow-x-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 dark:bg-teal-500/[0.07] rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 dark:bg-sky-500/[0.06] rounded-full blur-3xl'></div>
      </div>

      <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center min-h-screen mx-auto w-full max-w-screen-xl text-gray-900 dark:text-slate-200 px-4 md:px-8 lg:justify-between relative z-10 pt-24 pb-20 lg:py-0'>
        <div className='flex lg:hidden w-full items-center justify-between mb-6 relative z-20'>
          <div className='flex-1 min-w-0 pr-3'>
            <p className='text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-cyan-700 dark:text-teal-300 mb-2'>
              {PERSONAL_INFO.title}
            </p>
            <h1 className='text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-slate-100'>
              {PERSONAL_INFO.name}
            </h1>
          </div>
          <div className='flex-shrink-0 relative'>
            <div className='relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 dark:border-slate-600 shadow-lg dark:shadow-none'>
              <img
                src={profilePic}
                alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                className='w-full h-full object-cover'
                loading="eager"
                decoding="async"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>

        <div className='justify-center w-full lg:w-auto lg:flex-1 lg:min-w-0 relative z-20'>
          <div className='hidden lg:block mb-5 w-full'>
            <p className='text-sm font-semibold tracking-[0.2em] uppercase text-cyan-700 dark:text-teal-300 mb-3'>
              {PERSONAL_INFO.title}
            </p>
            <h1 className='text-5xl xl:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-slate-100'>
              {PERSONAL_INFO.name}
            </h1>
          </div>

          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug min-h-[2.5rem]'>
            <span className='text-gray-700 dark:text-slate-200'>I'm {article} </span>
            <span className='bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-teal-300 dark:to-sky-400 bg-clip-text text-transparent'>
              {displayText || PERSONAL_INFO.title}
            </span>
            {isTyping && <span className='animate-pulse text-cyan-600 dark:text-teal-300 ml-1 inline-block' aria-hidden="true">|</span>}
          </h2>

          <p className='text-gray-600 dark:text-slate-200 text-sm sm:text-base md:text-lg mb-4 max-w-2xl leading-relaxed'>
            {PERSONAL_INFO.intro}
          </p>
          <p className='text-sm md:text-base text-gray-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed'>
            Frontend: event catalog, register, on-screen ticket. Backend: SAM, Lambda, DynamoDB, WAF — the browser never talks to API Gateway directly.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap w-full'>
            <a
              href={FLAGSHIP.live}
              target="_blank"
              rel="noreferrer"
              className={`${ctaClass} bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 text-white hover:from-blue-500 hover:to-cyan-500 dark:hover:from-teal-500 dark:hover:to-sky-600`}
            >
              <span className='relative z-10 flex items-center'>
                {FLAGSHIP.name}
                <FaExternalLinkAlt className='ml-2 text-sm' />
              </span>
            </a>
            <Link
              className={`${ctaClass} bg-transparent border-2 border-cyan-500 dark:border-teal-400/70 text-cyan-700 dark:text-teal-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-teal-500/20 dark:hover:text-teal-200 cursor-pointer`}
              to='portfolio'
              smooth
              duration={500}
            >
              <span className='relative z-10 flex items-center'>
                Selected work
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200' />
              </span>
            </Link>
            <a
              href={RESUME.path}
              download={RESUME.filename}
              onClick={() => trackResumeDownload()}
              className={`${ctaClass} bg-transparent border-2 border-gray-400 dark:border-slate-500 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 hover:border-gray-500 dark:hover:border-slate-400`}
            >
              <span className='relative z-10 flex items-center'>
                Resume
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200' />
              </span>
            </a>
          </div>
        </div>

        <div className='hidden lg:flex mt-8 lg:mt-0 lg:flex-shrink-0 lg:ml-8 xl:ml-12 relative'>
          <div className='relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 dark:border-slate-600 shadow-2xl shadow-cyan-500/10 dark:shadow-none'>
            <img
              src={profilePic}
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
              className='w-full h-full object-cover'
              loading="eager"
              decoding="async"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
        </div>
      </div>

      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex flex-col items-center'>
        <Link to='about' smooth duration={500} className='cursor-pointer group flex flex-col items-center gap-1 text-gray-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-teal-300 transition-colors duration-300'>
          <span className='text-xs font-medium tracking-widest uppercase'>About</span>
          <svg className='w-5 h-5 group-hover:translate-y-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home
