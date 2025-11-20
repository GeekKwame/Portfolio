import React, { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Espot from "../assets/images/Espot.jpg"
import unidate from "../assets/images/unidtae.jpg"
import weather from "../assets/images/weather.jpg"

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

  const portfolios=[
    {
      id:1,
      src:Espot,
      title:"Espot E-commerce",
      description:"A full-stack e-commerce platform built with Django and React",
      link1:"http://ackahkelvin.pythonanywhere.com",
      link2:"https://github.com/Ackahkelvin45/Espot-Ecommernce-",
      tags:["React", "Django", "E-commerce"]
    },
    {
      id:2,
      src:unidate,
      title:"UniDate",
      description:"A social networking platform for university students",
      link1:"",
      link2:"https://github.com/Ackahkelvin45/unidate",
      tags:["React", "Django", "Social"]
    },
    {
      id:3,
      src:weather,
      title:"Weather App",
      description:"Real-time weather information application",
      link1:"",
      link2:"https://github.com/Ackahkelvin45/WeatherAPP",
      tags:["React", "API", "Weather"]
    }
  ]
  return (
    <div name="portfolio" ref={sectionRef} className='bg-gradient-to-b from-stone-900 to-gray-800 w-full min-h-screen py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className='text-4xl md:text-5xl font-bold mb-4'>
          Portfolio
        </p>
        <p className='py-4 text-gray-300 text-lg'>Check out some of my work here</p>
      </div>
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 justify-center'>
        {
          portfolios.map(({id,src,title,description,link1,link2,tags}, index)=>(
            <div 
              key={id}
              className={`group relative shadow-xl shadow-gray-900/50 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className='relative overflow-hidden'>
                <img src={src} alt={title} className='w-full h-48 object-cover group-hover:scale-110 duration-500 transition-transform' />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2 text-white'>{title}</h3>
                <p className='text-gray-400 text-sm mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {tags.map((tag, i) => (
                    <span key={i} className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-4'>
                  {link1 && (
                    <a 
                      href={link1} 
                      target="_blank" 
                      rel="noreferrer"
                      className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                  <a 
                    href={link2} 
                    target="_blank"
                    rel="noreferrer"
                    className='flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 border border-gray-600'
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Portfolio
