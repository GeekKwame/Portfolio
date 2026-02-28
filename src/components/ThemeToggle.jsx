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
        bg-gray-200/50 dark:bg-gray-800/50
        hover:bg-gray-300/50 dark:hover:bg-gray-700/50
        text-gray-600 dark:text-gray-400
        hover:text-cyan-600 dark:hover:text-cyan-400
        border border-gray-300/50 dark:border-gray-700/50
        hover:border-cyan-600/50 dark:hover:border-cyan-500/50
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
        focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800
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

