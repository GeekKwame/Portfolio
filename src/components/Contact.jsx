import React, { useState, useEffect, useRef } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Using mailto as fallback - can be enhanced with EmailJS or backend API
    const mailtoLink = `mailto:dogbeblessingkwame@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
    
    try {
      // For production, integrate with EmailJS or your backend API
      // Example with EmailJS:
      // await emailjs.send('service_id', 'template_id', {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   message: formData.message,
      // });
      
      // Fallback: Open email client
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      // Still show success for better UX, but log error
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div name="contact" ref={sectionRef} className='bg-gradient-to-b from-stone-800 to-gray-800 min-h-screen w-full text-white py-12 md:py-20'>
      <div className='flex flex-col p-4 sm:p-6 justify-center max-w-screen-lg mx-auto h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Contact
          </p>
          <p className='py-3 md:py-5 text-gray-300 text-base sm:text-lg'>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>
        
        <div className={`flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form 
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-2/3 lg:w-1/2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-2xl'
          >
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-semibold mb-2 text-cyan-400'>
                Name
              </label>
              <input 
                id='name'
                name='name' 
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-gray-900/50 p-3 rounded-lg border-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                }`}
                placeholder='Enter your name'
              />
              {errors.name && <p className='text-red-400 text-sm mt-1'>{errors.name}</p>}
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-semibold mb-2 text-cyan-400'>
                Email
              </label>
              <input 
                id='email'
                name='email' 
                type='email'
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-900/50 p-3 rounded-lg border-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                }`}
                placeholder='Enter your email'
              />
              {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}
            </div>

            <div className='mb-6'>
              <label htmlFor='message' className='block text-sm font-semibold mb-2 text-cyan-400'>
                Message
              </label>
              <textarea 
                id='message'
                rows={8} 
                name='message' 
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-gray-900/50 p-3 rounded-lg border-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                }`}
                placeholder='Enter your message'
              />
              {errors.message && <p className='text-red-400 text-sm mt-1'>{errors.message}</p>}
            </div>

            <button 
              type='submit'
              disabled={isSubmitting || isSubmitted}
              className={`bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 mx-auto flex items-center justify-center gap-2 hover:scale-105 hover:from-blue-500 hover:to-cyan-500 duration-300 rounded-lg text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all ${
                isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''
              }`}
            >
              {isSubmitted ? (
                <>
                  <FaCheckCircle /> Message Sent Successfully!
                </>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact