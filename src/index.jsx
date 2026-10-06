import React from 'react';
import ReactDOM from 'react-dom/client';
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

