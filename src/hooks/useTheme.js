import { useState, useEffect } from 'react';
import { THEME } from '../config/constants';

// Initialize theme immediately to prevent flash
const getInitialTheme = () => {
  if (typeof window === 'undefined') return THEME.DARK;
  
  // Check localStorage first
  const savedTheme = localStorage.getItem(THEME.STORAGE_KEY);
  if (savedTheme === THEME.LIGHT || savedTheme === THEME.DARK) {
    return savedTheme;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME.DARK;
  }
  
  return THEME.DARK; // Default to dark
};

// Set initial theme before React renders
if (typeof window !== 'undefined') {
  const initialTheme = getInitialTheme();
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(initialTheme);
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Update localStorage
    localStorage.setItem(THEME.STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  };

  return { theme, toggleTheme, isDark: theme === THEME.DARK };
};

