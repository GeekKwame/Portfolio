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
    success: <FaCheckCircle className="text-emerald shrink-0" />,
    error: <FaExclamationCircle className="text-rose-400 shrink-0" />,
    info: <FaInfoCircle className="text-accent shrink-0" />,
  };

  const borderStyles = {
    success: 'border-emerald/40',
    error: 'border-rose-500/40',
    info: 'border-accent/40',
  };

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-md
        shadow-2xl w-full max-w-[calc(100vw-2rem)] sm:min-w-[280px] sm:max-w-[400px] sm:w-auto transition-all duration-300
        bg-surface/95 text-slate-100
        ${borderStyles[type] || 'border-border'}
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="text-lg">{icons[type]}</div>
      <p className="flex-1 font-mono text-xs text-slate-200 font-medium">{message}</p>
      <button
        onClick={handleClose}
        className="text-slate-400 hover:text-white p-1 rounded hover:bg-surface-elevated transition-colors"
        aria-label="Close notification"
      >
        <FaTimes size={12} />
      </button>
    </div>
  );
};

export default Toast;
