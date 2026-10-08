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
          <div className="max-w-md w-full bg-paper-elevated p-8 border border-rule text-center">
            <FaExclamationTriangle className="text-accent text-3xl mx-auto mb-4" />
            <h1 className="font-display text-2xl text-ink mb-2">Something went wrong</h1>
            <p className="text-ink-muted mb-6 font-sans text-sm">
              Refresh the page, or go back to the top of the site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Refresh Page
              </button>
              <Link
                to="home"
                smooth
                duration={500}
                className="btn-ghost cursor-pointer"
              >
                <FaHome size={14} /> Go Home
              </Link>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-ink-faint cursor-pointer text-sm">Error Details (Dev Only)</summary>
                <pre className="mt-2 text-xs text-red-700 overflow-auto bg-surface-muted p-3 font-mono">
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

