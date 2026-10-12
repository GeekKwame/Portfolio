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
    success: <FaCheckCircle className="text-signal shrink-0" />,
    error: <FaExclamationCircle className="text-rose-600 shrink-0" />,
    info: <FaInfoCircle className="text-accent shrink-0" />,
  };

  const borderStyles = {
    success: 'border-signal/40',
    error: 'border-rose-500/40',
    info: 'border-accent/40',
  };

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 border
        shadow-lg w-full max-w-[calc(100vw-2rem)] sm:min-w-[280px] sm:max-w-[400px] sm:w-auto transition-all duration-300
        bg-paper-raised text-ink
        ${borderStyles[type] || 'border-rule'}
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="text-lg" aria-hidden="true">{icons[type]}</div>
      <p className="flex-1 font-sans text-sm text-ink font-medium">{message}</p>
      <button
        type="button"
        onClick={handleClose}
        className="inline-flex h-8 w-8 items-center justify-center text-ink-muted hover:text-ink transition-colors"
        aria-label="Close notification"
      >
        <FaTimes size={12} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Toast;
