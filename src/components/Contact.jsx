import React, { useState, memo } from 'react'
import { FaEnvelope, FaCopy, FaCheck, FaLinkedin, FaGithub } from 'react-icons/fa'
import { trackSocialClick } from '../utils/analytics'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const iconBtn =
  'inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-md border border-stone-300 dark:border-stone-600 text-ink dark:text-stone-100 hover:bg-stone-200/70 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-muted';

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
    <div name="contact" className='bg-paper dark:bg-ink w-full text-ink dark:text-stone-200 py-14 md:py-20'>
      <div className='flex flex-col px-4 sm:px-6 justify-center max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl mb-3 text-ink dark:text-stone-50'>
            Contact
          </h2>
          <p className='text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl'>
            Cloud, DevOps, or software work. Email is the fastest way to reach me.
          </p>
          <div className='accent-rule mt-4'></div>
        </div>

        <div className='w-full max-w-xl bg-surface dark:bg-surface-dark p-5 sm:p-7 rounded-lg border border-stone-200 dark:border-stone-700'>
          <p className='text-sm font-medium text-stone-500 dark:text-stone-400 mb-3'>Email</p>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-2 min-w-0'>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className='min-w-0 max-w-full text-sm sm:text-base font-semibold text-accent dark:text-accent-muted break-all hover:underline underline-offset-4 py-1'
            >
              {PERSONAL_INFO.email}
            </a>
            <span className='inline-flex items-center gap-1.5 shrink-0'>
              <button
                type="button"
                onClick={copyEmail}
                className={iconBtn}
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                title={copied ? 'Copied' : 'Copy'}
              >
                {copied ? <FaCheck className='text-green-600' /> : <FaCopy />}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={iconBtn}
                aria-label="Open email app"
                title="Email"
              >
                <FaEnvelope />
              </a>
              {linkedin?.url && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackSocialClick('linkedin')}
                  className={iconBtn}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {github?.url && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackSocialClick('github')}
                  className={iconBtn}
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
