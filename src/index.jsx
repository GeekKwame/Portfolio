import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/newsreader/opsz.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './index.css';
import App from './App';
import { initAnalytics, trackPageView } from './utils/analytics';

// Ensure light mode and clear legacy theme preference
if (typeof window !== 'undefined') {
  document.documentElement.classList.remove('dark');
  try {
    localStorage.removeItem('portfolio-theme');
  } catch {
    /* ignore */
  }
}

// Initialize analytics
initAnalytics();

// Track initial page view
trackPageView(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
