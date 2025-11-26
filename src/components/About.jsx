import React, { useEffect, useRef, useState } from 'react'
import { FaCode, FaServer, FaPalette, FaGraduationCap } from 'react-icons/fa'

function About() {
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

  const skills = [
    { icon: <FaCode />, title: 'Frontend Development', desc: 'React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design' },
    { icon: <FaServer />, title: 'Backend Development', desc: 'Python, Django, REST APIs, Database Design, API Integration, Authentication' },
    { icon: <FaPalette />, title: 'UI/UX Design', desc: 'Responsive Design, Modern Interfaces, User Experience, Accessibility, Performance Optimization' },
    { icon: <FaGraduationCap />, title: 'Education & Skills', desc: 'BSc Applied Mathematics (KNUST), Problem Solving, Algorithm Design, Data Structures' }
  ];

  return (
    <div name="about" ref={sectionRef} className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-stone-900 text-white py-20'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-4xl md:text-5xl font-bold mb-4'>About</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>
        
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              I'm Blessing Edmund Kwame Dogbe, a dedicated Full-Stack Developer with a passion for creating 
              innovative web solutions. I specialize in building modern, responsive, and user-focused applications 
              using cutting-edge technologies including React, JavaScript, Python, Django, Tailwind CSS, and Git.
            </p>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              With a strong foundation in Applied Mathematics from KNUST, I bring analytical thinking, 
              systematic problem-solving, and mathematical precision to every project. My approach combines 
              creative design with robust engineering principles to deliver scalable, maintainable, and 
              high-performance applications.
            </p>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-4'>
              I'm committed to continuous learning and staying current with industry best practices. 
              Whether it's implementing complex algorithms, optimizing database queries, or crafting 
              intuitive user interfaces, I strive to exceed expectations and deliver solutions that 
              make a meaningful impact.
            </p>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies, 
              and sharing knowledge with the developer community. I'm always open to collaborating on 
              exciting projects and opportunities to grow as a developer.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className='p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className='text-3xl text-cyan-400 mb-3'>{skill.icon}</div>
                <h3 className='text-lg font-bold mb-2'>{skill.title}</h3>
                <p className='text-sm text-gray-400'>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-md md:text-lg text-gray-300 mb-3'>
            <span className='font-semibold text-cyan-400'>Core Tech Stack:</span> I leverage Python's Django framework for robust backend development, 
            React for dynamic frontend experiences, and Tailwind CSS for modern, responsive designs. 
            JavaScript/ES6+ powers interactive features, while Git ensures version control and collaborative workflows.
          </p>
          <p className='text-md md:text-lg text-gray-300'>
            <span className='font-semibold text-cyan-400'>Additional Tools:</span> Postman, VS Code, Chrome DevTools, 
            npm/yarn, RESTful API design, Database management (SQL), and deployment platforms (Netlify, Vercel, PythonAnywhere).
          </p>
        </div>
      </div>
    </div>
  )
}

export default About