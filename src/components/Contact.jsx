import React, { useState, memo } from 'react'
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackContactSubmission } from '../utils/analytics'
import { PERSONAL_INFO } from '../config/constants'
import { useToastContext } from '../context/ToastContext'

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { success } = useToastContext();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (name === 'email' && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
    } else if (name === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio contact from ${formData.name}`)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    trackContactSubmission(true);
    success('Your email app should open with this message. If it does not, write to ' + PERSONAL_INFO.email + '.');
  };

  return (
    <div name="contact" ref={sectionRef} className='bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30 dark:bg-slate-900 dark:bg-none dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 min-h-screen w-full text-gray-900 dark:text-slate-200 py-12 md:py-20'>
      <div className='flex flex-col p-4 sm:p-6 justify-center max-w-screen-lg mx-auto h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-slate-50'>
            Contact
          </p>
          <p className='py-3 md:py-5 text-gray-600 dark:text-slate-200 text-base sm:text-lg'>
            Cloud, serverless, or full-stack work.{' '}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className='text-cyan-600 dark:text-teal-300 font-semibold underline-offset-2 hover:underline'
            >
              {PERSONAL_INFO.email}
            </a>
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        <div className={`flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-2/3 lg:w-1/2 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 dark:border-slate-700/80 shadow-xl dark:shadow-none'
          >
            <p className='text-sm text-gray-600 dark:text-slate-300 mb-4'>
              The button opens your email app with this draft. Nothing is sent from this site.
            </p>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-semibold mb-2 text-cyan-600 dark:text-teal-300'>
                Name <span className='text-red-500 dark:text-red-400'>*</span>
              </label>
              <input
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                onBlur={() => {
                  if (!formData.name.trim()) {
                    setErrors(prev => ({ ...prev, name: 'Name is required' }));
                  }
                }}
                className={`w-full bg-white dark:bg-slate-950 p-3 rounded-lg border-2 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-gray-400 dark:hover:border-slate-400 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-500 focus:border-cyan-500'
                  }`}
                placeholder='Enter your name'
                autoComplete='name'
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className='text-red-500 dark:text-red-400 text-sm mt-1' role="alert">{errors.name}</p>}
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-semibold mb-2 text-cyan-600 dark:text-teal-300'>
                Email <span className='text-red-500 dark:text-red-400'>*</span>
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={() => {
                  if (!formData.email.trim()) {
                    setErrors(prev => ({ ...prev, email: 'Email is required' }));
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
                  }
                }}
                className={`w-full bg-white dark:bg-slate-950 p-3 rounded-lg border-2 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-gray-400 dark:hover:border-slate-400 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-500 focus:border-cyan-500'
                  }`}
                placeholder='Enter your email'
                autoComplete='email'
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className='text-red-500 dark:text-red-400 text-sm mt-1' role="alert">{errors.email}</p>}
            </div>

            <div className='mb-6'>
              <div className='flex justify-between items-center mb-2'>
                <label htmlFor='message' className='block text-sm font-semibold text-cyan-600 dark:text-teal-300'>
                  Message <span className='text-red-500 dark:text-red-400'>*</span>
                </label>
                <span className={`text-xs ${formData.message.length > 500 ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-slate-400'}`}>
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                id='message'
                rows={8}
                name='message'
                value={formData.message}
                onChange={handleChange}
                onBlur={() => {
                  if (!formData.message.trim()) {
                    setErrors(prev => ({ ...prev, message: 'Message is required' }));
                  }
                }}
                maxLength={1000}
                className={`w-full bg-white dark:bg-slate-950 p-3 rounded-lg border-2 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none hover:border-gray-400 dark:hover:border-slate-400 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-500 focus:border-cyan-500'
                  }`}
                placeholder='Enter your message (max 1000 characters)'
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className='text-red-500 dark:text-red-400 text-sm mt-1' role="alert">{errors.message}</p>}
            </div>

            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <button
                type='submit'
                className='relative py-3 px-6 flex items-center justify-center gap-2 active:scale-[0.98] duration-200 rounded-lg text-white font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 touch-manipulation select-none min-h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 hover:from-blue-500 hover:to-cyan-500'
              >
                <FaPaperPlane /> Open email app
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className='relative py-3 px-6 flex items-center justify-center gap-2 active:scale-[0.98] duration-200 rounded-lg font-semibold border-2 border-cyan-500 dark:border-teal-400/70 text-cyan-600 dark:text-teal-300 hover:bg-cyan-50 dark:hover:bg-teal-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 touch-manipulation select-none min-h-[48px]'
              >
                <FaEnvelope /> Email me
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})

export default Contact
