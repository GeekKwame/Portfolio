import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter/wght.css';
import '@fontsource/cal-sans/400.css';
import '@fontsource-variable/syne/wght.css';
import '@fontsource-variable/darker-grotesque/wght.css';
import './index.css';
import App from './App';
import { initAnalytics, trackPageView } from './utils/analytics';

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
