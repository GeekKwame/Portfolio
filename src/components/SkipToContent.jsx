import React from 'react';
import { Link } from 'react-scroll';

function SkipToContent() {
  return (
    <Link
      to="home"
      smooth
      duration={500}
      className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gradient-to-r focus:from-cyan-500 focus:to-blue-500 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      Skip to main content
    </Link>
  );
}

export default SkipToContent;

