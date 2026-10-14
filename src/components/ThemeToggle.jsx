import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const STORAGE_KEY = 'theme';
const media = () => window.matchMedia('(prefers-color-scheme: dark)');

function readSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0A0A0A' : '#FFFFFF');
}

function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  // Follow the OS setting live until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = media();
    const onChange = (e) => {
      if (readSaved()) return;
      applyTheme(e.matches);
      setDark(e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    applyTheme(next);
    setDark(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
  };

  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-transform duration-500 hover:rotate-45 ${className}`}
    >
      {dark ? <FiSun size={22} aria-hidden="true" /> : <FiMoon size={20} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
