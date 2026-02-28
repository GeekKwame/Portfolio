import React, { useState, memo } from 'react'
import { FaGithub, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa"
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
      success('Email copied to clipboard!');
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback to mailto
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  const emailLink = SOCIAL_LINKS.find(link => link.platform === 'Email');
  const linkedinLink = SOCIAL_LINKS.find(link => link.platform === 'LinkedIn');
  const githubLink = SOCIAL_LINKS.find(link => link.platform === 'GitHub');

  const links = [
    {
      id: 1,
      child: (
        <> LinkedIn<FaLinkedin size={30} /> </>
      ),
      href: linkedinLink?.url || "",
      style: "rounded-tr-md",
      color: "hover:bg-blue-600",
      label: linkedinLink?.label || "Connect on LinkedIn"
    },
    {
      id: 2,
      child: (
        <> Github<FaGithub size={30} /> </>
      ),
      href: githubLink?.url || "",
      style: "",
      color: "hover:bg-gray-800",
      label: githubLink?.label || "View my GitHub"
    },
    {
      id: 3,
      child: (
        <> {emailCopied ? <>Copied!<FaCheck size={30} /></> : <>Mail<HiOutlineMail size={30} /></>} </>
      ),
      href: emailLink?.url || "",
      style: "rounded-br-md",
      color: emailCopied ? "bg-green-600" : "hover:bg-red-600",
      label: emailCopied ? "Email copied!" : emailLink?.label || "Copy email address",
      onClick: copyEmailToClipboard,
      isEmail: true
    },
  ]

  return (
    <div className='flex-col fixed text-white top-[43%] left-0 hidden md:flex z-40'>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`tooltip flex justify-between items-center w-32 h-12 px-4 bg-gradient-to-r from-gray-700 to-gray-800 ml-[-80px] hover:ml-[-10px] duration-300 transition-all group border-r-2 border-transparent hover:border-cyan-500 ${link.style} ${link.color} shadow-lg hover:shadow-cyan-500/50`}
            data-tooltip={link.label}
          >
            {link.isEmail ? (
              <button
                onClick={link.onClick}
                className='flex justify-between items-center w-full text-sm font-medium group-hover:scale-105 transition-transform duration-300 cursor-pointer'
                aria-label={link.label}
                title={link.label}
              >
                {link.child}
              </button>
            ) : (
              <a
                href={link.href}
                onClick={() => trackSocialClick(link.id === 1 ? 'linkedin' : 'github')}
                className='flex justify-between items-center w-full text-sm font-medium group-hover:scale-105 transition-transform duration-300'
                target="_blank"
                rel="noreferrer"
                aria-label={link.label || link.child.props.children[0]}
                title={link.label}
              >
                {link.child}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default SocialLinks