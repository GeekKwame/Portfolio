import React from 'react';
import ReactDOM from 'react-dom/client';
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

