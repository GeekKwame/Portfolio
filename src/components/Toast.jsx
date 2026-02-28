import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ id, message, type = 'success', duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto-dismiss after duration
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const icons = {
    success: <FaCheckCircle className="text-green-400" />,
    error: <FaExclamationCircle className="text-red-400" />,
    info: <FaInfoCircle className="text-blue-400" />,
  };

  const bgColors = {
    success: 'bg-green-500/10 border-green-500/30',
    error: 'bg-red-500/10 border-red-500/30',
    info: 'bg-blue-500/10 border-blue-500/30',
  };

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-md
        shadow-lg min-w-[280px] max-w-[400px] transition-all duration-300
        ${bgColors[type]}
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 text-xl">{icons[type]}</div>
      <p className="flex-1 text-sm text-white font-medium">{message}</p>
      <button
        onClick={handleClose}
        className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
        aria-label="Close notification"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
};

export default Toast;

