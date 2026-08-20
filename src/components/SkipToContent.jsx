import React from 'react';

function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-paper dark:focus:bg-stone-100 dark:focus:text-ink focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
    >
      Skip to main content
    </a>
  );
}

export default SkipToContent;
