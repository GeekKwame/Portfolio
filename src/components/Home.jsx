import React from 'react'
import { Link } from 'react-scroll';
import { trackResumeDownload } from '../utils/analytics'
import profilePic from "../assets/images/profile/profile-pic.jpeg"
import { PERSONAL_INFO, RESUME } from '../config/constants'

const Home = () => {
  const ctaClass =
    'w-full sm:w-auto px-5 py-3 flex items-center justify-center rounded-md text-base font-semibold duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-muted focus:ring-offset-2 focus:ring-offset-paper dark:focus:ring-offset-ink touch-manipulation select-none';

  return (
    <div name="home" className='min-h-[100svh] w-full bg-paper dark:bg-ink relative overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row justify-center items-center min-h-[100svh] mx-auto w-full max-w-6xl text-ink dark:text-stone-200 px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 lg:py-0 gap-8 lg:gap-16'>
        <div className='w-full lg:flex-1 min-w-0 order-2 lg:order-1'>
          <p className='text-sm font-medium text-accent dark:text-accent-muted mb-3'>
            {PERSONAL_INFO.title}
          </p>
          <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink dark:text-stone-100 mb-5'>
            {PERSONAL_INFO.name}
          </h1>
          <p className='text-base sm:text-lg text-stone-700 dark:text-stone-300 mb-4 max-w-xl leading-relaxed'>
            {PERSONAL_INFO.intro}
          </p>
          <p className='text-sm sm:text-base text-stone-600 dark:text-stone-400 mb-8 max-w-xl leading-relaxed'>
            AWS, Terraform, Python, Django, and React. Least-privilege IAM, and a clear line between what is public on the internet and what is not.
          </p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Link
              className={`${ctaClass} bg-ink dark:bg-stone-100 text-paper dark:text-ink cursor-pointer`}
              to='portfolio'
              smooth
              duration={500}
              offset={-80}
            >
              Selected work
            </Link>
            <div className='grid grid-cols-2 gap-3 sm:contents'>
              <a
                href={RESUME.path}
                download={RESUME.filename}
                onClick={() => trackResumeDownload()}
                className={`${ctaClass} border border-stone-400 dark:border-stone-500 text-ink dark:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800`}
              >
                Resume
              </a>
              <Link
                className={`${ctaClass} border border-stone-400 dark:border-stone-500 text-ink dark:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 cursor-pointer`}
                to='contact'
                smooth
                duration={500}
                offset={-80}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className='order-1 lg:order-2 flex-shrink-0'>
          <div className='w-28 h-28 sm:w-36 sm:h-36 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-stone-300 dark:border-stone-600'>
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
