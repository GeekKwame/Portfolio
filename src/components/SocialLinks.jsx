import React, { useState, memo } from 'react'
import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { trackSocialClick } from '../utils/analytics'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const SocialLinks = memo(function SocialLinks() {
  const [emailCopied, setEmailCopied] = useState(false);
  const { success } = useToastContext();

  const copyEmailToClipboard = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      trackSocialClick('email');
      success('Email copied');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  const emailLink = SOCIAL_LINKS.find(link => link.platform === 'Email');
  const linkedinLink = SOCIAL_LINKS.find(link => link.platform === 'LinkedIn');
  const githubLink = SOCIAL_LINKS.find(link => link.platform === 'GitHub');

  const links = [
    {
      id: 'linkedin',
      href: linkedinLink?.url || '',
      label: linkedinLink?.label || 'Connect on LinkedIn',
      icon: <FaLinkedin size={20} />,
    },
    {
      id: 'github',
      href: githubLink?.url || '',
      label: githubLink?.label || 'View my GitHub',
      icon: <FaGithub size={20} />,
    },
    {
      id: 'email',
      href: emailLink?.url || '',
      label: emailCopied ? 'Email copied' : 'Copy email address',
      icon: emailCopied ? <FaCheck size={20} /> : <HiOutlineMail size={20} />,
      onClick: copyEmailToClipboard,
    },
  ];

  return (
    <nav aria-label="Social links" className='hidden 2xl:flex flex-col gap-2 fixed top-1/2 left-3 -translate-y-1/2 z-40'>
      {links.map((link) => (
        link.onClick ? (
          <button
            key={link.id}
            type="button"
            onClick={link.onClick}
            className='w-11 h-11 flex items-center justify-center rounded-md bg-ink dark:bg-stone-100 text-paper dark:text-ink hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent'
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </button>
        ) : (
          <a
            key={link.id}
            href={link.href}
            onClick={() => trackSocialClick(link.id)}
            className='w-11 h-11 flex items-center justify-center rounded-md bg-ink dark:bg-stone-100 text-paper dark:text-ink hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent'
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        )
      ))}
    </nav>
  )
})

export default SocialLinks
