import React from 'react';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { Link } from 'react-scroll';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-gradient-to-b from-stone-900 via-gray-800 to-stone-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-red-500/30 shadow-2xl text-center">
            <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4 animate-pulse" />
            <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Refresh Page
              </button>
              <Link
                to="home"
                smooth
                duration={500}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <FaHome /> Go Home
              </Link>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer text-sm">Error Details (Dev Only)</summary>
                <pre className="mt-2 text-xs text-red-400 overflow-auto bg-gray-900/50 p-3 rounded">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

