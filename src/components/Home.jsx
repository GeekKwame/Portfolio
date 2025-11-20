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
    <div name="home" className='h-screen w-full bg-gradient-to-b from-stone-900 via-gray-800 to-stone-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className='flex flex-col justify-center items-center h-full mx-auto w-screen md:max-w-screen-lg text-white md:ml-0 lg:flex-row md:justify-between relative z-10'>
        <div className='justify-center mt-24 lg:ml-20 ml-3 md:mt-44 lg:mt-20 w-auto animate-fade-in'>
          <div className='mb-4'>
            <h1 className='text-2xl md:text-3xl mb-2'>
              Hi There, <span className='animate-bounce inline-block'>👋</span>
            </h1>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              I am a {displayText}
              {isTyping && <span className='animate-pulse'>|</span>}
            </h2>
          </div>
          <p className='text-gray-300 text-base md:text-lg mb-6 max-w-lg leading-relaxed'>
            I build and design modern web applications using React
            for the frontend and Python/Django for the backend. 
            I'm currently focused on improving my skills as a 
            full-stack developer and creating clean, responsive, 
            and user-friendly interfaces with tools like Tailwind CSS.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link 
              className='group w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all' 
              to='portfolio' 
              smooth 
              duration={500}
            >
              View Portfolio 
              <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
            </Link>
            <Link 
              className='group w-fit px-6 py-3 flex items-center rounded-lg bg-transparent border-2 border-cyan-500 text-cyan-400 cursor-pointer text-lg font-semibold hover:bg-cyan-500 hover:text-white duration-300 hover:scale-105 transition-all' 
              to='contact' 
              smooth 
              duration={500}
            >
              Get In Touch
              <MdOutlineArrowForwardIos className='group-hover:translate-x-1 ml-2 duration-200'/>
            </Link>
          </div>
        </div>
        
        <div className='hidden md:flex animate-float'>
          <Player autoplay loop src={laptop} style={{width:'500px',height:"500px"}} />
        </div>
        <div className='flex md:hidden mr-16 animate-float'>
          <Player autoplay loop src={laptop} style={{width:'300px',height:"300px"}} />
        </div>
      </div>
    </div>
  )
}

export default Home