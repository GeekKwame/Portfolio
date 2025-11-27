import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/edmund-blessing/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      id: 2,
      icon: <FaGithub />,
      href: "https://github.com/GeekKwame",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      href: "mailto:dogbeblessingkwame@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Portfolio", to: "portfolio" },
    { id: 4, name: "Experience", to: "experience" },
    { id: 5, name: "Contact", to: "contact" }
  ];

  return (
    <footer className='bg-gradient-to-b from-gray-900 to-stone-900 text-white border-t border-gray-800'>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8'>
          {/* Brand Section */}
          <div className='flex flex-col'>
            <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4'>
              Edmund Blessing
            </h3>
            <p className='text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 md:mb-4'>
              Full Stack Developer passionate about creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
            <div className='flex gap-3 md:gap-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={`text-gray-400 ${link.color} transition-colors duration-300 text-lg md:text-xl`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 md:mb-4 text-cyan-400'>Quick Links</h4>
            <ul className='space-y-1.5 md:space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-xs sm:text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 md:mb-4 text-cyan-400'>Get In Touch</h4>
            <div className='space-y-2 md:space-y-3 text-xs sm:text-sm text-gray-400'>
              <a 
                href="mailto:dogbeblessingkwame@gmail.com" 
                className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 break-words'
              >
                <FaEnvelope className='text-cyan-400 flex-shrink-0' />
                <span className='break-all'>dogbeblessingkwame@gmail.com</span>
              </a>
              <p className='text-gray-500 text-xs mt-3 md:mt-4'>
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2'>
          <p className='text-gray-500 text-xs sm:text-sm text-center md:text-left'>
            © {currentYear} Edmund Blessing. All rights reserved.
          </p>
          <p className='text-gray-500 text-xs sm:text-sm flex items-center gap-1'>
            Made with <FaHeart className='text-red-500 animate-pulse' /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

