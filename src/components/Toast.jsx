import React, { useEffect } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa'

function Toast({ message, type = 'success', onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <FaCheckCircle className='text-green-400' />,
    error: <FaExclamationCircle className='text-red-400' />,
    info: <FaInfoCircle className='text-blue-400' />
  };

  const bgColors = {
    success: 'bg-green-500/10 border-green-500/30',
    error: 'bg-red-500/10 border-red-500/30',
    info: 'bg-blue-500/10 border-blue-500/30'
  };

  return (
    <div className={`fixed top-24 right-4 md:right-8 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-sm shadow-lg animate-slide-in-right ${bgColors[type]} min-w-[300px] max-w-[90vw]`}>
      <div className='text-xl'>
        {icons[type]}
      </div>
      <p className='flex-1 text-white text-sm font-medium'>{message}</p>
      <button
        onClick={onClose}
        className='text-gray-400 hover:text-white transition-colors duration-200'
        aria-label="Close notification"
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default Toast

