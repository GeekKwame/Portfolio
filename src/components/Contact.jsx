import React, { useState, memo } from 'react'
import { FaEnvelope, FaCopy, FaCheck, FaLinkedin, FaGithub } from 'react-icons/fa'
import { trackSocialClick } from '../utils/analytics'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const Contact = memo(function Contact() {
  const [copied, setCopied] = useState(false);
  const { success } = useToastContext();
  const linkedin = SOCIAL_LINKS.find((link) => link.platform === 'LinkedIn');
  const github = SOCIAL_LINKS.find((link) => link.platform === 'GitHub');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      trackSocialClick('email');
      success('Email copied');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <div name="contact" className='bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30 dark:bg-slate-900 dark:bg-none dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 w-full text-gray-900 dark:text-slate-200 py-12 md:py-20'>
      <div className='flex flex-col p-4 sm:p-6 justify-center max-w-screen-lg mx-auto'>
        <div className='mb-8'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-slate-50'>
            Contact
          </p>
          <p className='text-gray-600 dark:text-slate-200 text-base sm:text-lg max-w-2xl'>
            Cloud, serverless, or full-stack work. Email is the fastest way to reach me.
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4'></div>
        </div>

        <div className='w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-xl border border-gray-200 dark:border-slate-700'>
          <p className='text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2'>Email</p>
          <div className='flex flex-col sm:flex-row sm:items-center gap-3 mb-6'>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className='text-lg sm:text-xl font-semibold text-cyan-700 dark:text-teal-300 break-all hover:underline underline-offset-4'
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className='inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-slate-500 text-sm font-semibold text-gray-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 min-h-[44px] shrink-0'
              aria-label="Copy email address"
            >
              {copied ? <FaCheck className='text-green-500' /> : <FaCopy />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className='flex flex-col sm:flex-row gap-3'>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className='inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-white font-semibold min-h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 hover:from-blue-500 hover:to-cyan-500'
            >
              <FaEnvelope /> Email me
            </a>
            {linkedin?.url && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackSocialClick('linkedin')}
                className='inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-semibold border-2 border-gray-300 dark:border-slate-500 text-gray-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 min-h-[48px]'
              >
                <FaLinkedin /> LinkedIn
              </a>
            )}
            {github?.url && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackSocialClick('github')}
                className='inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-semibold border-2 border-gray-300 dark:border-slate-500 text-gray-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 min-h-[48px]'
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
