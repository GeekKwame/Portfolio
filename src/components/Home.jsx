import React, { useState, useEffect } from 'react'
import {MdOutlineArrowForwardIos} from "react-icons/md"
import laptop from "../assets/109028-react-and-node-development-mobile-first.json"
import { Player  } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-scroll';

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
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className='flex flex-col justify-center items-start min-h-screen mx-auto w-full max-w-screen-xl text-white px-4 md:px-8 lg:flex-row lg:justify-between relative z-10 py-20 lg:py-0'>
        <div className='justify-center w-full lg:max-w-2xl animate-fade-in overflow-visible pr-2'>
          <div className='mb-4 w-full overflow-visible'>
            <h1 className='text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-2'>
              Hi There, <span className='animate-bounce inline-block'>👋</span>
            </h1>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight break-words'>
              <span className='text-white'>I'm a </span>
              <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                {displayText || 'Full Stack Developer'}
              </span>
              {isTyping && <span className='animate-pulse text-cyan-400 ml-1'>|</span>}
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
              className='group w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-base sm:text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all whitespace-nowrap' 
              to='portfolio' 
              smooth 
              duration={500}
            >
              View Portfolio 
              <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
            </Link>
            <Link 
              className='group w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-cyan-500 text-cyan-400 cursor-pointer text-base sm:text-lg font-semibold hover:bg-cyan-500 hover:text-white duration-300 hover:scale-105 transition-all whitespace-nowrap' 
              to='contact' 
              smooth 
              duration={500}
            >
              Get In Touch
              <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
            </Link>
            <a 
              href="/resume.pdf" 
              download="Edmund_Blessing_Resume.pdf"
              className='group w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center rounded-lg bg-transparent border-2 border-gray-500 text-gray-300 cursor-pointer text-base sm:text-lg font-semibold hover:bg-gray-700 hover:text-white hover:border-gray-400 duration-300 hover:scale-105 transition-all whitespace-nowrap'
            >
              Download Resume
              <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
            </a>
          </div>
        </div>
        
        <div className='hidden lg:flex animate-float mt-8 lg:mt-0 lg:flex-shrink-0 lg:ml-8'>
          <Player autoplay loop src={laptop} style={{width:'500px',height:"500px", maxWidth:'100%'}} />
        </div>
        <div className='flex lg:hidden animate-float mt-4 sm:mt-6 flex-shrink-0 justify-center w-full'>
          <Player autoplay loop src={laptop} style={{width:'200px',height:"200px", maxWidth:'100%'}} />
        </div>
      </div>
    </div>
  )
}

export default Home