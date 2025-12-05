import React, { useEffect, useRef, useState } from 'react'
import { FaCode, FaRocket, FaGithub } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div name="portfolio" ref={sectionRef} className='bg-gradient-to-b from-stone-900 to-gray-800 w-full min-h-screen py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Portfolio
          </p>
          <p className='py-2 md:py-4 text-gray-300 text-base sm:text-lg'>Explore my projects and see how I bring ideas to life</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>
        
        <div className={`flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className='text-center max-w-2xl mx-auto px-4'>
            {/* Icon Animation */}
            <div className='mb-6 md:mb-8 flex justify-center'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300'></div>
                <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-full border-2 border-cyan-500/50 group-hover:border-cyan-500 group-hover:scale-110 transition-all duration-300'>
                  <FaCode className='text-4xl md:text-6xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300' />
                </div>
              </div>
            </div>

            {/* Coming Soon Message */}
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-2'>
              Projects Coming Soon!
            </h3>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed px-2'>
              I'm currently working on exciting personal projects that showcase my skills in 
              React, Django, and modern web development. Check back soon to see what I've been building!
            </p>
            <p className='text-gray-400 text-sm sm:text-base mb-6 md:mb-8 px-2'>
              In the meantime, feel free to explore my GitHub profile to see my learning journey and contributions.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-0'>
              <a 
                href="https://github.com/GeekKwame" 
                target="_blank"
                rel="noreferrer"
                className='group w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'
              >
                <FaGithub /> View My GitHub
              </a>
              <Link 
                to='contact' 
                smooth 
                duration={500}
                className='group w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 cursor-pointer'
              >
                <FaRocket /> Get In Touch
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div className='mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700'>
              <p className='text-gray-400 text-xs sm:text-sm mb-3 md:mb-4'>Technologies I'm working with:</p>
              <div className='flex flex-wrap justify-center gap-2 sm:gap-3'>
                {['React', 'Django', 'Python', 'JavaScript', 'Tailwind CSS', 'REST APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className='group relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-cyan-400 text-xs sm:text-sm font-medium hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default'
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className='relative z-10'>{tech}</span>
                    <span className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
