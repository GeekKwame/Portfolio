import React, { useState, useEffect } from 'react'
import {MdOutlineArrowForwardIos} from "react-icons/md"
import laptop from "../assets/109028-react-and-node-development-mobile-first.json"
import { Player  } from '@lottiefiles/react-lottie-player';
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
      {/* Enhanced animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'></div>
      </div>
      
      <div className='flex flex-col justify-start lg:justify-center items-start min-h-screen mx-auto w-full max-w-screen-xl text-white px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between relative z-10 pt-24 pb-20 lg:py-0'>
        <div className='justify-center w-full lg:w-auto lg:flex-1 lg:min-w-0 animate-fade-in relative z-20 mt-4 lg:mt-0'>
          <div className='mb-4 w-full'>
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
              className='group relative w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-base sm:text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800' 
              to='portfolio' 
              smooth 
              duration={500}
            >
              <span className='relative z-10 flex items-center'>
                View Portfolio 
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </Link>
            <Link 
              className='group relative w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-cyan-500 text-cyan-400 cursor-pointer text-base sm:text-lg font-semibold hover:bg-cyan-500 hover:text-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800' 
              to='contact' 
              smooth 
              duration={500}
            >
              <span className='relative z-10 flex items-center'>
                Get In Touch
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
              </span>
              <span className='absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg'></span>
            </Link>
            <a 
              href="/resume.pdf" 
              download="Edmund_Blessing_Resume.pdf"
              className='group relative w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-gray-500 text-gray-300 cursor-pointer text-base sm:text-lg font-semibold hover:bg-gray-700 hover:text-white hover:border-gray-400 hover:shadow-lg hover:shadow-gray-500/20 duration-300 hover:scale-105 transition-all whitespace-nowrap overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='relative z-10 flex items-center'>
                Download Resume
                <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
              </span>
              <span className='absolute inset-0 bg-gray-700/50 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg'></span>
            </a>
          </div>
        </div>
        
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
        <div className='flex lg:hidden animate-float mt-4 sm:mt-6 flex-shrink-0 justify-center w-full relative'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse'></div>
            <div className='relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20'>
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