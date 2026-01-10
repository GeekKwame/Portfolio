import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaStickyNote, FaBook, FaMicrophone, FaPlane } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import notesAppImage from "../assets/images/portfolio/notes-app.png"
import booksAppImage from "../assets/images/portfolio/books-app.png"
import audioHomeImage from "../assets/images/portfolio/audio-home.png"
import audioLiveImage from "../assets/images/portfolio/audio-live.png"
import tourPlannerImage from "../assets/images/portfolio/tour-planner.png"

function Portfolio() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const portfolios = [
    {
      id: 1,
      src: notesAppImage,
      title: "Notes App",
      description: "A full-stack notes application built with Django REST Framework and React. Features include creating, reading, updating, and deleting notes with a clean, intuitive dark-themed interface. Includes real-time updates, auto-save functionality, and responsive design.",
      link1: "",
      link2: "https://github.com/GeekKwame/Notes-App",
      tags: ["React", "Django", "REST API", "Python", "Full Stack"],
      icon: FaStickyNote,
      iconText: "Notes App Screenshot"
    },
    {
      id: 2,
      src: booksAppImage,
      title: "Book Website",
      description: "A full-stack book tracker featuring a modern dark UI with a books-themed background. Built with React + Vite frontend and Django REST Framework backend. Supports full CRUD operations: create, list, edit, and delete books with glassmorphism-inspired design and animated accents.",
      link1: "",
      link2: "https://github.com/GeekKwame/books-website",
      tags: ["React", "Vite", "Django", "Django REST Framework", "Python", "Full Stack", "CORS"],
      icon: FaBook,
      iconText: "Book Website Screenshot"
    },
    {
      id: 3,
      src: [audioHomeImage, audioLiveImage],
      title: "Live Audio Room",
      description: "A modern, real-time audio room application built with React, TypeScript, and Stream.io Video SDK. Create and join live audio conversations similar to Clubhouse or Twitter Spaces. Features include participant management, permission system, live streaming, user authentication, and session persistence with a beautiful glassmorphism UI.",
      link1: "",
      link2: "https://github.com/GeekKwame/live-audio-room",
      tags: ["React", "TypeScript", "Stream.io", "Node.js", "Express", "Real-time", "WebRTC", "Full Stack"],
      icon: FaMicrophone,
      iconText: "Live Audio Room Screenshot"
    },
    {
      id: 4,
      src: tourPlannerImage,
      title: "Tourvisto",
      description: "A modern, full-stack travel application that combines the power of AI with a seamless booking experience. Features specific portals for tourists (AI planning, booking) and admins (dashboard, management). Built with React Router v7, Supabase, and Google Gemini.",
      link1: "",
      link2: "https://github.com/GeekKwame/travel-planner",
      tags: ["React Router v7", "TypeScript", "Tailwind CSS", "Supabase", "Gemini AI", "Stripe"],
      icon: FaPlane,
      iconText: "Tourvisto Screenshot"
    }
  ];

  return (
    <div name="portfolio" ref={sectionRef} className='bg-gradient-to-b from-stone-900 to-gray-800 w-full min-h-screen py-12 md:py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Portfolio
          </p>
          <p className='py-2 md:py-4 text-gray-300 text-base sm:text-lg'>Explore my projects and see how I bring ideas to life</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {portfolios.map(({ id, src, title, description, link1, link2, tags, icon: Icon = FaStickyNote, iconText }, index) => {
            const fallbackIconText = iconText || `${title} Screenshot`;
            return (
              <div
                key={id}
                className={`group relative shadow-xl shadow-gray-900/50 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image Area */}
                <div className='relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
                  {imageErrors[id] || !src ? (
                    <div className='flex flex-col items-center justify-center p-8 min-h-[300px] md:min-h-[400px]'>
                      <Icon className='text-6xl md:text-8xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300' />
                      <p className='text-gray-400 text-sm'>{fallbackIconText}</p>
                    </div>
                  ) : Array.isArray(src) ? (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        {src.map((imgSrc, imgIndex) => (
                          <div key={imgIndex} className='relative overflow-hidden rounded-lg'>
                            <img
                              src={imgSrc}
                              alt={`${title} - Screenshot ${imgIndex + 1}`}
                              className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform'
                              onError={() => handleImageError(id)}
                              loading="lazy"
                              decoding="async"
                              style={{ maxHeight: '400px' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      <img
                        src={src}
                        alt={`${title} - Project Screenshot`}
                        className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform'
                        onError={() => handleImageError(id)}
                        loading="lazy"
                        decoding="async"
                        style={{ maxHeight: '500px' }}
                      />
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>

                <div className='p-4 sm:p-6'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300'>{title}</h3>
                  <p className='text-gray-400 text-sm md:text-base mb-3 sm:mb-4 leading-relaxed'>{description}</p>

                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
                    {tags.map((tag, i) => (
                      <span key={i} className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs sm:text-xs rounded-md border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4'>
                    {link1 && (
                      <a
                        href={link1}
                        target="_blank"
                        rel="noreferrer"
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 active:from-blue-600 active:to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50 touch-manipulation select-none min-h-[44px]'
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                    {link2 && (
                      <a
                        href={link2}
                        target="_blank"
                        rel="noreferrer"
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-600 hover:border-gray-500 touch-manipulation select-none min-h-[44px]'
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
