import React from 'react';

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
        <main className="min-h-screen bg-paper flex items-center">
          <div className="shell w-full">
            <p className="label">Error</p>
            <h1 className="mt-3 text-4xl text-ink">Something went wrong.</h1>
            <p className="mt-4 max-w-prose text-ink-muted">
              The page failed to render. Reloading usually fixes it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => window.location.reload()} className="btn-primary">
                Reload page
              </button>
              <a href="/" className="btn-secondary">Go to homepage</a>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-8 max-w-prose overflow-auto bg-paper-sunk p-4 font-mono text-meta text-accent-strong">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
