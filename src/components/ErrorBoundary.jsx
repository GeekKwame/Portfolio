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
        <div className="min-h-screen w-full bg-paper flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-surface p-8 rounded-lg border border-stone-200 text-center">
            <FaExclamationTriangle className="text-accent text-4xl mx-auto mb-4" />
            <h1 className="font-display text-2xl text-ink mb-2">Something went wrong</h1>
            <p className="text-stone-600 mb-6">
              Refresh the page, or go back to the top of the site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-ink text-paper rounded-md font-semibold"
              >
                Refresh Page
              </button>
              <Link
                to="home"
                smooth
                duration={500}
                className="px-6 py-3 border border-stone-400 rounded-md text-ink font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaHome /> Go Home
              </Link>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-stone-500 cursor-pointer text-sm">Error Details (Dev Only)</summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto bg-stone-100 p-3 rounded">
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

