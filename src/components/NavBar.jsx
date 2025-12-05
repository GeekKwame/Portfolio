import React, { useState, useEffect } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && nav) {
        setNav(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [nav]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav) {
        const menu = document.querySelector('ul.flex.flex-col');
        const button = document.querySelector('button[aria-label="Toggle menu"]');
        if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
          setNav(false);
        }
      }
    };
    if (nav) {
      setTimeout(() => document.addEventListener('click', handleClickOutside), 100);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [nav]);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "experience", label: "Experience" },
    { id: 5, link: "contact", label: "Contact" }
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 text-white fixed top-0 z-50 px-4 md:px-8 transition-all duration-300 ${
      scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg' : 'bg-stone-900'
    }`}>
      <Link to="home" smooth duration={500} className='cursor-pointer'>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-header bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 break-words'>
          EDMUND BLESSING
        </h1>
      </Link>
      
      <div>
        <ul className='hidden md:flex items-center gap-2'>
          {links.map((linkItem) => (
            <li 
              key={linkItem.id} 
              className='relative group'
            >
              <Link 
                to={linkItem.link} 
                smooth 
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(linkItem.link)}
                className={`relative px-4 py-2 cursor-pointer capitalize rounded-lg transition-all duration-300 ${
                  activeSection === linkItem.link
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className='relative z-10'>{linkItem.label}</span>
                {activeSection === linkItem.link && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'></span>
                )}
                {activeSection !== linkItem.link && (
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300'></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        
        <button 
          className='cursor-pointer z-50 text-gray-400 md:hidden hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-2' 
          onClick={() => setNav(!nav)}
          aria-label="Toggle menu"
          aria-expanded={nav}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        
        {nav && (
          <>
            <div 
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-20'
              onClick={() => setNav(false)}
              aria-hidden="true"
            />
            <ul className='flex flex-col justify-start fixed items-center h-screen top-20 left-0 w-full bg-gradient-to-b from-stone-900/98 to-gray-800/98 backdrop-blur-md animate-slide-in z-40'>
              {links.map((linkItem) => (
                <li 
                  className='pt-10 text-3xl hover:scale-110 transition-transform duration-300' 
                  key={linkItem.id}
                >
                  <Link 
                    onClick={() => setNav(!nav)} 
                    to={linkItem.link} 
                    smooth 
                    duration={500}
                    className='text-gray-300 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-4 py-2'
                  >
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
