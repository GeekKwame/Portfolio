import { useCallback, useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ id, message, type = 'success', duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [id, onClose]);

  useEffect(() => {
    const show = setTimeout(() => setIsVisible(true), 10);
    const timer = setTimeout(() => handleClose(), duration);
    return () => {
      clearTimeout(show);
      clearTimeout(timer);
    };
  }, [duration, handleClose]);

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
        shadow-lg w-full max-w-[calc(100vw-2rem)] sm:min-w-[280px] sm:max-w-[400px] sm:w-auto transition-all duration-300
        bg-surface dark:bg-surface-dark
        ${bgColors[type]}
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 text-xl">{icons[type]}</div>
      <p className="flex-1 text-sm text-ink dark:text-stone-100 font-medium">{message}</p>
      <button
        onClick={handleClose}
        className="flex-shrink-0 text-stone-500 dark:text-stone-400 hover:text-ink dark:hover:text-stone-100 p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
        aria-label="Close notification"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
};

export default Toast;

