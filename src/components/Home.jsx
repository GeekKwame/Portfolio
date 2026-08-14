import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-scroll';
import { trackResumeDownload } from '../utils/analytics'
import profilePic from "../assets/images/profile/profile-pic.jpeg"
import { PERSONAL_INFO, RESUME, FLAGSHIP } from '../config/constants'

const Home = () => {
  const ctaClass =
    'w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg text-base sm:text-lg font-semibold duration-200 active:scale-[0.98] transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950 touch-manipulation select-none min-h-[48px]';

  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:bg-slate-950 dark:bg-none dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 relative overflow-x-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none' aria-hidden="true">
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
          <div className='flex-shrink-0'>
            <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 dark:border-slate-600 shadow-lg dark:shadow-none'>
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

        <div className='w-full lg:flex-1 lg:min-w-0 relative z-20'>
          <div className='hidden lg:block mb-5 w-full'>
            <p className='text-sm font-semibold tracking-[0.2em] uppercase text-cyan-700 dark:text-teal-300 mb-3'>
              {PERSONAL_INFO.title}
            </p>
            <h1 className='text-5xl xl:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-slate-100'>
              {PERSONAL_INFO.name}
            </h1>
          </div>

          <p className='text-gray-700 dark:text-slate-200 text-base sm:text-lg md:text-xl mb-4 max-w-2xl leading-relaxed'>
            {PERSONAL_INFO.intro}
          </p>
          <p className='text-sm md:text-base text-gray-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed'>
            Frontend: event catalog, register, on-screen ticket. Backend: SAM, Lambda, DynamoDB, WAF — the browser never talks to API Gateway directly.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap w-full items-stretch sm:items-center'>
            <Link
              className={`${ctaClass} bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 text-white hover:from-blue-500 hover:to-cyan-500 dark:hover:from-teal-500 dark:hover:to-sky-600 cursor-pointer`}
              to='portfolio'
              smooth
              duration={500}
              offset={-80}
            >
              Selected work
              <MdOutlineArrowForwardIos className='ml-2' />
            </Link>
            <a
              href={RESUME.path}
              download={RESUME.filename}
              onClick={() => trackResumeDownload()}
              className={`${ctaClass} bg-transparent border-2 border-gray-400 dark:border-slate-500 text-gray-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800`}
            >
              Resume
            </a>
            <a
              href={FLAGSHIP.live}
              target="_blank"
              rel="noreferrer"
              className='inline-flex items-center justify-center gap-2 text-cyan-700 dark:text-teal-300 font-semibold underline-offset-4 hover:underline min-h-[48px] px-1'
            >
              {FLAGSHIP.name} live
              <FaExternalLinkAlt className='text-xs' />
            </a>
          </div>
        </div>

        <div className='hidden lg:flex mt-8 lg:mt-0 lg:flex-shrink-0 lg:ml-8 xl:ml-12 relative'>
          <div className='w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 dark:border-slate-600 shadow-2xl shadow-cyan-500/10 dark:shadow-none'>
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
    </div>
  )
}

export default Home
