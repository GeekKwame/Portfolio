import React, { useState, useEffect } from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { Link } from 'react-scroll';
import profilePic from "../assets/images/profile/profile-pic.jpg"

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-b from-stone-900 via-gray-800 to-stone-900 relative overflow-x-hidden'>
      {/* Animated gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 animate-gradient-shift' style={{ backgroundSize: '200% 200%' }}></div>
      {/* Enhanced animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse will-change-transform'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse will-change-transform' style={{ animationDelay: '1s' }}></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse will-change-transform' style={{ animationDelay: '2s' }}></div>
        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'></div>
      </div>

      <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center min-h-screen mx-auto w-full max-w-screen-xl text-white px-4 md:px-8 lg:justify-between relative z-10 pt-24 pb-20 lg:py-0'>
        {/* Mobile Header with Profile Picture on Right */}
        <div className='flex lg:hidden w-full items-center justify-between mb-6 relative z-20'>
          <div className='flex-1'>
            <h1 className='text-xl sm:text-2xl md:text-3xl mb-2 text-white'>
              Hi There, <span className='animate-bounce inline-block'>👋</span>
            </h1>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight'>
              <span className='text-white'>I'm a </span>
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                {displayText || 'Full Stack Developer'}
              </span>
              {isTyping && <span className='animate-pulse text-cyan-400 ml-1 inline-block'>|</span>}
            </h2>
          </div>
          <div className='flex-shrink-0 ml-4 animate-float relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse'></div>
            <div className='relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/20'>
              <img
                src={profilePic}
                alt="Edmund Blessing - Full Stack Developer"
                className='w-full h-full object-cover'
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
        </div>

        {/* Desktop and Mobile Content */}
        <div className='justify-center w-full lg:w-auto lg:flex-1 lg:min-w-0 animate-fade-in relative z-20 mt-0 lg:mt-0'>
          {/* Desktop Header */}
          <div className='hidden lg:block mb-4 w-full'>
            <h1 className='text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-2 text-white relative z-10'>
              Hi There, <span className='animate-bounce inline-block'>👋</span>
            </h1>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight w-full'>
              <span className='text-white block sm:inline'>I'm a </span>
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block sm:inline'>
                {displayText || 'Full Stack Developer'}
              </span>
              {isTyping && <span className='animate-pulse text-cyan-400 ml-1 inline-block'>|</span>}
            </h2>
          </div>
          
          <p className='text-gray-300 text-sm sm:text-base md:text-lg mb-6 max-w-lg leading-relaxed w-full'>
            I'm a passionate Full Stack Developer specializing in building scalable,
            modern web applications. With expertise in React, Django, and Python,
            I transform complex ideas into elegant, user-friendly digital solutions.
            I'm dedicated to writing clean code, implementing best practices, and
            delivering exceptional user experiences that drive business value.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 flex-wrap w-full'>
            <Link
              className='group relative w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-base sm:text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 active:from-blue-600 active:to-cyan-600 duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 touch-manipulation select-none min-h-[48px]'
              to='portfolio'
              smooth
              duration={500}
            >
              <span className='relative z-10 flex items-center'>
                View Portfolio
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200' />
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </Link>
            <Link
              className='group relative w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-cyan-500 text-cyan-400 cursor-pointer text-base sm:text-lg font-semibold hover:bg-cyan-500 hover:text-white active:bg-cyan-600 active:scale-95 duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 touch-manipulation select-none min-h-[48px]'
              to='contact'
              smooth
              duration={500}
            >
              <span className='relative z-10 flex items-center'>
                Get In Touch
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200' />
              </span>
              <span className='absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg'></span>
            </Link>
            <a
              href="/resume.pdf"
              download="Edmund_Blessing_Resume.pdf"
              onClick={() => {
                const { trackResumeDownload } = require('../utils/analytics');
                trackResumeDownload();
              }}
              className='group relative w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-gray-500 text-gray-300 cursor-pointer text-base sm:text-lg font-semibold hover:bg-gray-700 hover:text-white hover:border-gray-400 active:bg-gray-800 active:scale-95 hover:shadow-lg hover:shadow-gray-500/20 duration-300 hover:scale-105 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 touch-manipulation select-none min-h-[48px]'
            >
              <span className='relative z-10 flex items-center'>
                Download Resume
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200' />
              </span>
              <span className='absolute inset-0 bg-gray-700/50 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg'></span>
            </a>
          </div>
        </div>

        {/* Desktop Profile Picture */}
        <div className='hidden lg:flex animate-float mt-8 lg:mt-0 lg:flex-shrink-0 lg:ml-8 xl:ml-12 relative'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse'></div>
            <div className='relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105'>
              <img
                src={profilePic}
                alt="Edmund Blessing - Full Stack Developer"
                className='w-full h-full object-cover'
                loading="eager"
                decoding="async"
                style={{
                  objectPosition: 'center 25%',
                  imageRendering: 'auto',
                  filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home