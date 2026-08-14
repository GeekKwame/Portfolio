import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-lg
        bg-gray-200/50 dark:bg-slate-800
        hover:bg-gray-300/50 dark:hover:bg-slate-700
        text-gray-600 dark:text-slate-200
        hover:text-cyan-600 dark:hover:text-teal-300
        border border-gray-300/50 dark:border-slate-600
        hover:border-cyan-600/50 dark:hover:border-teal-500/50
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-teal-400 focus:ring-offset-2
        focus:ring-offset-gray-100 dark:focus:ring-offset-slate-950
        min-w-[44px] min-h-[44px] flex items-center justify-center
        touch-manipulation select-none
      "
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <FaSun
          className={`
            absolute inset-0 transition-all duration-300
            ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
        <FaMoon
          className={`
            absolute inset-0 transition-all duration-300
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

