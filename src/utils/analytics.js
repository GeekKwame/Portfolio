/**
 * Analytics utility for tracking user interactions
 * Ready for integration with Google Analytics, Plausible, or other analytics services
 */

// Initialize analytics (replace with your analytics service)
export const initAnalytics = () => {
  // Example: Google Analytics 4
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('config', 'GA_MEASUREMENT_ID');
  // }
  
  // Example: Plausible
  // if (typeof window !== 'undefined' && window.plausible) {
  //   // Plausible auto-initializes
  // }
  
  console.log('Analytics initialized');
};

// Track page views
export const trackPageView = (path) => {
  // Example: Google Analytics
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('config', 'GA_MEASUREMENT_ID', {
  //     page_path: path,
  //   });
  // }
  
  // Example: Plausible
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible('pageview', { props: { path } });
  // }
  
  console.log('Page view tracked:', path);
};

// Track events
export const trackEvent = (eventName, eventParams = {}) => {
  // Example: Google Analytics
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, eventParams);
  // }
  
  // Example: Plausible
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible(eventName, { props: eventParams });
  // }
  
  console.log('Event tracked:', eventName, eventParams);
};

// Track portfolio project views
export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName,
    category: 'portfolio',
  });
};

// Track contact form submissions
export const trackContactSubmission = (success = true) => {
  trackEvent('contact_submission', {
    success,
    category: 'contact',
  });
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    category: 'engagement',
  });
};

// Track social link clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    platform,
    category: 'social',
  });
};

