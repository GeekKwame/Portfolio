import React, { useState, memo } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCopy, FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { trackSocialClick } from '../utils/analytics'
import { PERSONAL_INFO, SOCIAL_LINKS, NAVIGATION_LINKS } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  const { success } = useToastContext();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      trackSocialClick('email');
      success('Email copied to clipboard!');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin />;
      case 'FaGithub':
        return <FaGithub />;
      case 'FaEnvelope':
        return <FaEnvelope />;
      default:
        return <FaEnvelope />;
    }
  };

  const socialLinks = SOCIAL_LINKS.map(link => ({
    ...link,
    icon: getIcon(link.icon),
    href: link.url
  }));

  const quickLinks = NAVIGATION_LINKS;

  return (
    <footer className='bg-gradient-to-b from-slate-50 via-white to-blue-50/20 dark:from-gray-900 dark:to-stone-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 relative'>
      {/* Wave Divider */}
      <div className='absolute -top-[49px] left-0 w-full overflow-hidden'>
        <svg viewBox='0 0 1200 120' preserveAspectRatio='none' className='relative block w-full h-[50px]'>
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='fill-slate-100 dark:fill-stone-800'></path>
        </svg>
      </div>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 py-8 md:py-12 pt-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8'>
          {/* Brand Section */}
          <div className='flex flex-col'>
            <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4'>
              {PERSONAL_INFO.name}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 md:mb-4'>
              {PERSONAL_INFO.bio}
            </p>
            <div className='flex gap-3 md:gap-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackSocialClick(link.label.toLowerCase().replace(' ', '_'))}
                  aria-label={link.label}
                    className={`text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 text-lg md:text-xl hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 md:mb-4 text-cyan-600 dark:text-cyan-400'>Quick Links</h4>
            <ul className='space-y-1.5 md:space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className='text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-xs sm:text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 md:mb-4 text-cyan-600 dark:text-cyan-400'>Get In Touch</h4>
            <div className='space-y-2 md:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400'>
              <div className='flex items-center gap-2 group'>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className='flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 break-words flex-1'
                >
                  <FaEnvelope className='text-cyan-600 dark:text-cyan-400 flex-shrink-0' />
                  <span className='break-all'>{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className='p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 text-gray-500 dark:text-gray-500'
                  aria-label="Copy email to clipboard"
                  title="Copy email"
                >
                  {emailCopied ? (
                    <FaCheck className='text-green-400' />
                  ) : (
                    <FaCopy className='text-gray-400' />
                  )}
                </button>
              </div>
              <p className='text-gray-500 dark:text-gray-500 text-xs mt-3 md:mt-4'>
                {PERSONAL_INFO.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2'>
          <p className='text-gray-500 dark:text-gray-500 text-xs sm:text-sm text-center md:text-left'>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className='text-gray-500 dark:text-gray-500 text-xs sm:text-sm flex items-center gap-1'>
            Made with <FaHeart className='text-red-500 animate-pulse' /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer

