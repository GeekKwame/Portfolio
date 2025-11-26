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
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-4xl md:text-5xl font-bold mb-4 text-white'>
            Portfolio
          </p>
          <p className='py-4 text-gray-300 text-lg'>Explore my projects and see how I bring ideas to life</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>
        
        <div className={`flex flex-col items-center justify-center min-h-[500px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className='text-center max-w-2xl mx-auto'>
            {/* Icon Animation */}
            <div className='mb-8 flex justify-center'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse'></div>
                <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-full border-2 border-cyan-500/50'>
                  <FaCode className='text-6xl text-cyan-400' />
                </div>
              </div>
            </div>

            {/* Coming Soon Message */}
            <h3 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Projects Coming Soon!
            </h3>
            <p className='text-gray-300 text-lg md:text-xl mb-6 leading-relaxed'>
              I'm currently working on exciting personal projects that showcase my skills in 
              React, Django, and modern web development. Check back soon to see what I've been building!
            </p>
            <p className='text-gray-400 text-base mb-8'>
              In the meantime, feel free to explore my GitHub profile to see my learning journey and contributions.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a 
                href="https://github.com/GeekKwame" 
                target="_blank"
                rel="noreferrer"
                className='group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'
              >
                <FaGithub /> View My GitHub
              </a>
              <Link 
                to='contact' 
                smooth 
                duration={500}
                className='group flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer'
              >
                <FaRocket /> Get In Touch
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div className='mt-12 pt-8 border-t border-gray-700'>
              <p className='text-gray-400 text-sm mb-4'>Technologies I'm working with:</p>
              <div className='flex flex-wrap justify-center gap-3'>
                {['React', 'Django', 'Python', 'JavaScript', 'Tailwind CSS', 'REST APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className='px-4 py-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300'
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {tech}
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
