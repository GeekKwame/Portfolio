import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-md
        text-ink dark:text-stone-200
        hover:bg-stone-200/70 dark:hover:bg-stone-800
        border border-stone-300 dark:border-stone-600
        focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-muted
        min-w-[44px] min-h-[44px] flex items-center justify-center
        touch-manipulation
      "
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <FaSun
          className={`absolute inset-0 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
        <FaMoon
          className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
