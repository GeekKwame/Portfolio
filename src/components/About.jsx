import React from 'react'
import { FaCode, FaServer, FaPalette, FaGraduationCap, FaProjectDiagram, FaTools, FaRocket } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function About() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { icon: <FaProjectDiagram />, value: '3+', label: 'Projects', color: 'from-cyan-500 to-blue-500' },
    { icon: <FaRocket />, value: '5+', label: 'Technologies', color: 'from-purple-500 to-pink-500' },
    { icon: <FaTools />, value: 'Full Stack', label: 'Developer', color: 'from-green-500 to-teal-500' }
  ];

  const skills = [
    { icon: <FaCode />, title: 'Frontend Development', desc: 'React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design' },
    { icon: <FaServer />, title: 'Backend Development', desc: 'Python, Django, REST APIs, Database Design, API Integration, Authentication' },
    { icon: <FaPalette />, title: 'UI/UX Design', desc: 'Responsive Design, Modern Interfaces, User Experience, Accessibility, Performance Optimization' },
    { icon: <FaGraduationCap />, title: 'Education & Skills', desc: 'BSc Applied Mathematics (KNUST), Problem Solving, Algorithm Design, Data Structures' }
  ];

  return (
    <div name="about" ref={sectionRef} className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-stone-900 text-white py-12 md:py-20'>
      <div className='max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>About</p>
          <p className='text-gray-400 text-base sm:text-lg mb-4'>Get to know more about me, my skills, and what drives me</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='group relative p-4 md:p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 overflow-hidden'
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className='relative z-10 flex flex-col items-center text-center'>
                <div className={`text-3xl md:text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className='text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12'>
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              I'm Blessing Edmund Kwame Dogbe, a dedicated Full-Stack Developer with a passion for creating 
              innovative web solutions. I specialize in building modern, responsive, and user-focused applications 
              using cutting-edge technologies including React, JavaScript, Python, Django, Tailwind CSS, and Git.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              With a strong foundation in Applied Mathematics from KNUST, I bring analytical thinking, 
              systematic problem-solving, and mathematical precision to every project. My approach combines 
              creative design with robust engineering principles to deliver scalable, maintainable, and 
              high-performance applications.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              I'm committed to continuous learning and staying current with industry best practices. 
              Whether it's implementing complex algorithms, optimizing database queries, or crafting 
              intuitive user interfaces, I strive to exceed expectations and deliver solutions that 
              make a meaningful impact.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed'>
              When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies, 
              and sharing knowledge with the developer community. I'm always open to collaborating on 
              exciting projects and opportunities to grow as a developer.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className='group relative p-4 md:p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 overflow-hidden'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='text-2xl md:text-3xl text-cyan-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300'>{skill.icon}</div>
                  <h3 className='text-base md:text-lg font-bold mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors duration-300'>{skill.title}</h3>
                  <p className='text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={`mt-6 md:mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className='p-4 md:p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10'>
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2'>
              <FaTools className='text-cyan-400' />
              Technology Stack
            </h3>
            <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
              <div>
                <p className='text-sm sm:text-base md:text-lg text-gray-300 mb-2'>
                  <span className='font-semibold text-cyan-400 block mb-2'>Core Technologies:</span>
                  <span className='text-gray-400 leading-relaxed'>
                    Python (Django), React, JavaScript/TypeScript, Tailwind CSS, Git, REST APIs, SQL Databases
                  </span>
                </p>
              </div>
              <div>
                <p className='text-sm sm:text-base md:text-lg text-gray-300'>
                  <span className='font-semibold text-cyan-400 block mb-2'>Development Tools:</span>
                  <span className='text-gray-400 leading-relaxed'>
                    VS Code, Postman, Chrome DevTools, npm/yarn, GitHub, Docker, Deployment (Netlify, Vercel, PythonAnywhere)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About